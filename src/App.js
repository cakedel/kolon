import Wrapper from "./components/Wrapper";
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
  const serviceKey =
    "H9Z28aMsFmBs58iRwg8%2FmcKOEtKEKRRD5bzlertTgbLMLt2%2FwYspNVmVSZpTJpFxWFIE%2Bxgf%2BCk9GZdOcne5%2FQ%3D%3D";
  const [data, getData] = useState();
  const theday = new Date();
  const year = theday.getFullYear();
  const month = ("0" + (theday.getMonth() + 1)).slice(-2);
  const yesterday = ("0" + (theday.getDate() - 1)).slice(-2);
  const today = ("0" + (theday.getDate())).slice(-2);
  const yesterdate = year + month + yesterday;
  const todate = year + month + today;

  useEffect(() => {
    const url = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${serviceKey}&resultType=json&isinCd=KR7120110002&mrktCtg=KOSPI&basDt=20220928`;
    const getStock = async () => {
      const response = await axios.get(url);
      getData(response.data);
    };
    getStock();
  }, []);
  console.log(data);
  return (
    <div>
      {data ? (
          <Routes>
            <Route path="/" element={<MainContents />} />
            <Route path="/subVisual/1" element={<Company GNbar={GNbar} />} />
            <Route path="/subVisual/2" element={<Product GNbar={GNbar} />} />
            <Route path="/subVisual/3" element={<Sustain GNbar={GNbar} />} />
            <Route path="/subVisual/4" element={<Stock GNbar={GNbar} />} />
            <Route path="/subVisual/5" element={<Employment GNbar={GNbar} />} />
          </Route>
        </Routes>
      ) : (
        <div>Now Loading...</div>
      )}
    </div>
  );
};

export default App;
