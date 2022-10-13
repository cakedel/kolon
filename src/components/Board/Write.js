import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Write = ({ list, setList, input, setInput, num }) => {
  const inputSort = useRef();
  const LINK = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, id: num.current });
  };
  const submitList = () => {
    setList([...list, input]);
    num.current++;
    setInput({
      ...input,
      sort: "",
      company: "",
      title: "",
      content: "",
      date: "",
    });
    LINK("/subMenu/5");
  };

  const writeBoard = () => {
    if (inputSort.current.value === "선택" || "") {
      alert("경력 유무를 입력해주세요.");
    } else {
      submitList();
    }
    console.log(inputSort.current.value);
  };

  return (
    <div className="Write">
      <h3>글 작성하기</h3>
      <table className="writeTable">
        <tbody>
          <tr>
            <td className="writeTitle">경력구분</td>
            <td>
              <select
                type="text"
                value={input.sort || ""}
                name="sort"
                onChange={handleInput}
                ref={inputSort}
              >
                <option value="선택">선택</option>
                <option value="경력">경력</option>
                <option value="신입">신입</option>
              </select>
            </td>
            <td className="writeTitle">회사명</td>
            <td>
              <input
                type="text"
                value={input.company || ""}
                name="company"
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr>
            <td className="writeTitle">제목</td>
            <td>
              <input
                className="inputTitle"
                type="text"
                value={input.title || ""}
                name="title"
                onChange={handleInput}
              />
            </td>
            <td className="writeTitle">날짜</td>
            <td>
              <input
                type="text"
                value={input.date || ""}
                name="date"
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr>
            <td className="writeTitle">내용</td>
            <td colSpan={3}>
              <input
                className="inputContent"
                type="text"
                value={input.content || ""}
                name="content"
                onChange={handleInput}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="writeBtn" onClick={writeBoard}>
        글쓰기
      </button>
    </div>
  );
};

export default Write;
