import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const View = ({ list }) => {
  const LINK = useNavigate();
  const { id } = useParams();
  const view = list.find((el) => String(el.id) === id);
  return (
    <div>
      <table>
        <tr>{view.title}</tr>
        <tr>
          <td>구분</td>
          <td>{view.sort}</td>
          <td>날짜</td>
          <td>{view.date}</td>
        </tr>
      </table>
      <button>수정하기</button>
      <button>삭제하기</button>
    </div>
  );
};

export default View;
