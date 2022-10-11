import Wrapper from "./components/Wrapper";
import MainVisual from "./components/MainVisual";
import MainContents from "./components/MainContents";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Stock from "./components/Stock";
import Company from "./components/Company";
import Business from "./components/Business";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const serviceKey =
    "H9Z28aMsFmBs58iRwg8%2FmcKOEtKEKRRD5bzlertTgbLMLt2%2FwYspNVmVSZpTJpFxWFIE%2Bxgf%2BCk9GZdOcne5%2FQ%3D%3D";
  const [data, getData] = useState();
  const desterday = new Date();
  const year = desterday.getFullYear();
  const month = ("0" + (desterday.getMonth() + 1)).slice(-2);
  const theDayBefroeYesterday = ("0" + (desterday.getDate())).slice(-2);
  const desterDate = year + month + theDayBefroeYesterday;
  console.log(desterDate);
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
    <Wrapper>
      <Header />
      {data ? (
        <main>
          <Routes>
            <Route path="/" element={<MainVisual />} />
            <Route path="/company" element={<Company />} />
            <Route path="/business" element={<Business />} />
            <Route
              path="/stock"
              element={
                <Stock stockData={data} beforeyesterdate={desterDate} />
              }
            />
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
