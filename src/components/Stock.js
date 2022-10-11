import React from "react";

const Stock = ({ stockData, beforeyesterdate }) => {
  const kolonStock = stockData.response.body.items.item[0]
  console.log(kolonStock);
  const yesterdayStock = kolonStock.clpr;
  const vsStock = kolonStock.vs;
  const stockNum = Number(yesterdayStock);
  const vsStocknum = Number(vsStock);
  const trquStockNum = Number(kolonStock.trqu)
  const date = new Date()
  const day = date.getDate() - 1
  const year = date.getFullYear()
  const month = "0" + date.getMonth()
  const yesterday = `${year}-${month}-${day}`

  return (
    <section className="Stock section">
      <h2>주가 정보</h2>
      <p>주주의 편의를 위해 실시간 주가정보를 제공해드립니다</p>
      <div className="inner">
        <strong>{yesterday} 기준</strong>
        <table className="stocktable">
          <tbody>
            <th className="stockNum">{stockNum.toLocaleString()}</th>
            <td>
              <th className="topTitle">전일대비</th>
              <tr className="bottomValue">{vsStocknum.toLocaleString()}</tr>
            </td>
            <td>
              <th className="topTitle">등락률</th>
              <tr className="bottomValue">{kolonStock.fltRt}</tr>
            </td>
            <td>
              <th className="topTitle">시가</th>
              <tr className="bottomValue">{kolonStock.mkp}</tr>
            </td>
            <td>
              <th className="topTitle">고가</th>
              <tr className="bottomValue">{kolonStock.hipr}</tr>
            </td>
            <td>
              <th className="topTitle">저가</th>
              <tr className="bottomValue">{kolonStock.lopr}</tr>
            </td>
            <td>
              <th className="topTitle">거래량</th>
              <tr className="bottomValue">{trquStockNum.toLocaleString()}</tr>
            </td>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Stock;
