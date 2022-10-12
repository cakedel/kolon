import React from "react";
import MainVisual from "./MainVisual";
import SubVisual from "./SubVisual";
import { Route, Routes } from "react-router-dom";
const SubMain = () => {
  const GNbar = [
    { id: 1, tit: "회사정보", link: "/subVisual/1" },
    { id: 2, tit: "제품정보", link: "/subVisual/2" },
    { id: 3, tit: "지속가능경영", link: "/subVisual/3" },
    { id: 4, tit: "투자정보", link: "/subVisual/4" },
    { id: 5, tit: "채용정보", link: "/subVisual/5" },
  ];
  return (
    <div>
      <Routes>
        <Route path="/*" element={<MainVisual />}></Route>
        <Route path="/subMenu/:id/*" element={<SubVisual GNbar={GNbar}  />}></Route>
      </Routes>
    </div>
  );
};

export default SubMain;
