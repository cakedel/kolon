import React, { useEffect } from "react";

const Write = ({ list, setList, input, setInput, num }) => {
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
  };

  React.useEffect(() => {
    if (input.sort !== "경력" || "신입") {
      alert("경력 유무를 입력해주세요.");
    }
    console.log(input.sort)
  }, [input.sort]);

  const writeBoard = () => {
    submitList();
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
              >
                <option value="선택">선택</option>
                <option value="경력">경력</option>
                <option value="신입">신입</option>
              </select>
            </td>
            <td className="writeTitle">회사명</td>
            <td>
              <input
                className="fullWidth"
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
                className="fullWidth"
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
                className="title"
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
