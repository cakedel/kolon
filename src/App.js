import Wrapper from "./components/Wrapper";
import MainVisual from "./components/MainVisual";
import MainContents from "./components/MainContents";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Stock from "./components/Stock";
import Company from "./components/Company";
import Business from "./components/Business";
import { useCallback, useEffect, useState } from "react";
import { axios } from "axios";

const App = () => {
  const [data, getData] = useState();
  const serviceKey = process.env.SERVICE_KEY;

  useEffect(() => {
    const url = "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=H9Z28aMsFmBs58iRwg8%2FmcKOEtKEKRRD5bzlertTgbLMLt2%2FwYspNVmVSZpTJpFxWFIE%2Bxgf%2BCk9GZdOcne5%2FQ%3D%3D&resultType=json&isinCd=KR7120110002"
    const getStock = async () => {

        const response = await axios.get(url);
        console.log(response.data)
        getData(response.data);
        
    };
    getStock();
    console.log(data)
  }, []);

  return (
    <Wrapper>
      <Header />
      {data ? (
        <main>
          <Routes>
            <Route path="/" element={<MainVisual />} />
            <Route path="/company" element={<Company />} />
            <Route path="/business" element={<Business />} />
            <Route path="/stock" element={<Stock />} />
          </Routes>
          <Routes>
            <Route path="/" element={<MainContents />} />
          </Routes>
        </main>
      ) : (
        <div>Now loading</div>
      )}

      <Footer />
    </Wrapper>
  );
};

export default App;
