import React from "react";

const Stock = ({ stockData, yesterdate }) => {
  console.log(stockData);
  const yesterdayStock = stockData.response.body.items.item[0].clpr;
  const vsStock = stockData.response.body.items.item[0].vs;
  const stockNum = Number(yesterdayStock);
  const vsStocknum = Number(vsStock);
  return (
    <section className="Stock section">
      <h2>주가 정보</h2>
      <p>주주의 편의를 위해 실시간 주가정보를 제공해드립니다</p>
      <div className="inner">
        <strong>{yesterdate}기준</strong>
        <table className="stocktable">
          <tbody>
            <th className="stockNum">{stockNum.toLocaleString()}</th>
            <td>
              <tr className="topTitle">전일대비</tr>
              <tr>{vsStocknum.toLocaleString()}</tr>
            </td>
            <td>
              <tr className="topTitle">등락률</tr>
              <tr>{stockData.response.body.items.item[0].fltRt}</tr>
            </td>
            <td>
              <tr className="topTitle">시가</tr>
              <tr>{stockData.response.body.items.item[0].mkp}</tr>
            </td>
            <td>
              <tr className="topTitle">고가</tr>
              <tr>{stockData.response.body.items.item[0].hipr}</tr>
            </td>
            <td>
              <tr className="topTitle">저가</tr>
              <tr>{stockData.response.body.items.item[0].lopr}</tr>
            </td>
            <td>
              <tr className="topTitle">거래량</tr>
              <tr>{stockData.response.body.items.item[0].trqu}</tr>
            </td>
          </tbody>
        </table>
        KR7120110002
      </div>
    </section>
  );
};

export default Stock;
