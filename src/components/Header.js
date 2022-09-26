import React from "react";
import { Link, Router } from "react-router-dom";

const GNbar = [
  { id: 1, tit: "회사정보" },
  { id: 2, tit: "제품정보" },
  { id: 3, tit: "지속가능경영" },
  { id: 4, tit: "투자정보" },
  { id: 5, tit: "채용정보" },
];

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <h1>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/assets/img/logo.svg`} />
          </Link>
        </h1>
        <nav className="Gnb">
          <ul>
            {GNbar.map((menu) => {
              return (<li key={menu.id}>{menu.tit}</li>);
            })}
          </ul>
        </nav>
        <div className="sideBar">
            <i className="xi-globus"/>
            <i className="xi-search"/>
            <i className="xi-mail-o"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
