import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="inner">
        <div className="container">
          <ul className="footerMenu">
            <li>
              <Link to="/">개인정보 처리방침</Link>
            </li>
            <li>
              <Link to="/">이용약관</Link>
            </li>
            <li>
              <Link to="/">법적 고지</Link>
            </li>
            <li>
              <Link to="/">이메일 무단수집 거부</Link>
            </li>
          </ul>
          <h2>
            <img src={`${process.env.PUBLIC_URL}/assets/img/logo-white.svg`} />
          </h2>
        </div>
        <p>Copyright &copy; 2022 Kolon Industries, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
