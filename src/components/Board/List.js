import React from "react";
import { Link, useNavigate } from "react-router-dom";

const List = ({ list, num }) => {
  const LINK = useNavigate();
  const writeBoard = () => {
    LINK("write");
  };

  return (
    <div>
      <div className="title">
        <h3>채용공고</h3>
        <p>
          현재 <span>{list.length}</span>건의 채용이 진행 중입니다.
        </p>
      </div>
      <table className="employTable">
        <thead>
          <tr>
            <td className="number">no</td>
            <td className="sort">구분</td>
            <td className="company">사명</td>
            <td className="title">제목</td>
            <td className="date">모집기간</td>
          </tr>
        </thead>
        <tbody>
          {list
            .map((it) => {
              return (
                <tr key={it.id}>
                  <td className="boardNum">{it.id}</td>
                  <td className="boardSort">
                    <span>{it.sort}</span>
                  </td>
                  <td className="boardCom">{it.company}</td>
                  <td className="boardTit">
                    <Link to={"view/" + it.id}>{it.title}</Link>
                  </td>
                  <td className="boardDt">{it.date}</td>
                </tr>
              );
            })
            .reverse()}
        </tbody>
      </table>

      <button className="writeBtn" onClick={writeBoard}>
        글쓰기
      </button>
    </div>
  );
};

export default List;
