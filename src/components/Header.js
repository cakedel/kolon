import React from "react";
import { Link, Router } from "react-router-dom";

const Header = () => {
  const GNbar = [
    { id: 1, tit: "회사정보", link: "/subMenu/1" },
    { id: 2, tit: "제품정보", link: "/subMenu/2" },
    { id: 3, tit: "지속가능경영", link: "/subMenu/3" },
    { id: 4, tit: "투자정보", link: "/subMenu/4" },
    { id: 5, tit: "채용정보", link: "/subMenu/5" },
  ];
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
                <Link to={menu.link} key={menu.id}>
                  <li key={menu.id}>{menu.tit}</li>
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="sideBar">
          <Link to="/*">
            <i className="xi-globus" />
          </Link>
          <Link to="/*">
            <i className="xi-search" />
          </Link>
          <Link to="/*">
            <i className="xi-mail-o" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
