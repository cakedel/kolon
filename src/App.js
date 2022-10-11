import MainContents from "./components/MainContents";
import { Routes, Route } from "react-router-dom";
import Stock from "./components/Stock";
import Product from "./components/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import Employment from "./components/Employment";
import Sustain from "./components/Sustain";
import Company from "./components/Company";

const App = () => {
  const GNbar = [
    { id: 1, tit: "회사정보", link: "/company" },
    { id: 2, tit: "제품정보", link: "/product" },
    { id: 3, tit: "지속가능경영", link: "/sustain" },
    { id: 4, tit: "투자정보", link: "/stock" },
    { id: 5, tit: "채용정보", link: "/employment" },
  ];
  const [data, getData] = useState();
  const theday = new Date();
  const year = theday.getFullYear();
  const month = ("0" + (theday.getMonth() + 1)).slice(-2);
  const yesterday = ("0" + (theday.getDate() - 1)).slice(-2);
  const yesterdate = year + month + yesterday;

  const SERVICE_KEY =
    "H9Z28aMsFmBs58iRwg8%2FmcKOEtKEKRRD5bzlertTgbLMLt2%2FwYspNVmVSZpTJpFxWFIE%2Bxgf%2BCk9GZdOcne5%2FQ%3D%3D";
  useEffect(() => {
    const url = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${SERVICE_KEY}&resultType=json&isinCd=KR7120110002&mrktCtg=KOSPI&basDt=20221007`;
    const getStock = async () => {
      const response = await axios.get(url);
      getData(response.data);
    };
    getStock();
  }, []);

  return (
    <div>
      {data ? (
        <Routes>
          <Route element={<Layout GNbar={GNbar} />}>
            <Route path="/" element={<MainContents />} />
            <Route path="/subVisual/1" element={<Company />} />
            <Route path="/subVisual/2" element={<Product />} />
            <Route path="/subVisual/3" element={<Sustain />} />
            <Route
              path="/subVisual/4"
              element={<Stock stockData={data} />}
            />
            <Route path="/subVisual/5" element={<Employment />} />
          </Route>
        </Routes>
      ) : (
        <div>Now Loading...</div>
      )}
    </div>
  );
};

export default App;
