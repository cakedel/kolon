import React from "react";

const MainContents = () => {
  return (
    <section className="MainContents section">
      <div className="inner">
        <h2>당신의 삶 속에 언제나 함께합니다</h2>
        <div className="container">
          <div className="protect">
            <div className="content">
              <h3>protect</h3>
              <strong>산업자재</strong>
            </div>
          </div>
          <div className="cover">
            <div className="content">
              <h3>cover</h3>
              <strong>필름/전자재료</strong>
            </div>
          </div>
          <div className="connect">
            <div className="content">
              <h3>connect</h3>
              <strong>화학부문</strong>
            </div>
          </div>
          <div className="fnc">
            <div className="content">
              <h3>FnC</h3>
              <strong>패션산업</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContents;
