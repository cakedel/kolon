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
              return (
                <Link to="/">
                  <li key={menu.id}>{menu.tit}</li>
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="sideBar">
          <Link to="/">
            <i className="xi-globus" />
          </Link>
          <Link to="/">
            <i className="xi-search" />
          </Link>
          <Link to="/">
            <i className="xi-mail-o" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
