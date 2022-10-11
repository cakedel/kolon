import React from "react";

const Stock = ({ stockData }) => {
  const kolonStock = stockData.response.body.items.item[0];
  console.log(kolonStock);
  const yesterdayStock = kolonStock.clpr;
  const vsStock = kolonStock.vs;
  const stockNum = Number(yesterdayStock);
  const vsStocknum = Number(vsStock);
  const trquStockNum = Number(kolonStock.trqu);
  const date = new Date();
  const day = date.getDate() - 1;
  const year = date.getFullYear();
  const month = "0" + date.getMonth();
  const yesterday = `${year}-${month}-${day}`;

  return (
    <section className="Stock section">
      <div className="inner">
        <h3>주주의 편의를 위해 실시간 주가정보를 제공해드립니다</h3>
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
      <div className="inner">
        <h3>배당정보</h3>
        <table className="divideInfo">
          <thead>
            <tr>
              <td className="kind">구분</td>
              <td className="sort">주식종류</td>
              <td className="year 2021">12기(2021)</td>
              <td className="year 2020">11기(2020)</td>
              <td className="year 2019">10기(2019)</td>
              <td className="year 2018">9기(2018)</td>
              <td className="year 2017">8기(2017)</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="doubleCloumn">주당현금배당(원)</th>
              <td>
                <tr>보통주</tr>
                <tr>우선주</tr>
              </td>
              <td>
                <tr>1,300</tr>
                <tr>1,350</tr>
              </td>
              <td>
                <tr>1,000</tr>
                <tr>1,050</tr>
              </td>
              <td>
                <tr>900</tr>
                <tr>950</tr>
              </td>
              <td>
                <tr>900</tr>
                <tr>950</tr>
              </td>
              <td>
                <tr>1,100</tr>
                <tr>1,150</tr>
              </td>
            </tr>
            <tr>
              <th className="doubleCloumn">현금배당수익률(%)</th>
              <td>
                <tr>보통주</tr>
                <tr>우선주</tr>
              </td>
              <td>
                <tr>1.8%</tr>
                <tr>3.8%</tr>
              </td>
              <td>
                <tr>2.5%</tr>
                <tr>4.7%</tr>
              </td>
              <td>
                <tr>1.8%</tr>
                <tr>4.3%</tr>
              </td>
              <td>
                <tr>1.7%</tr>
                <tr>3.8%</tr>
              </td>
              <td>
                <tr>1.4%</tr>
                <tr>3.4%</tr>
              </td>
            </tr>
            <tr>
              <th colSpan={2}>현금배당금 총액(백 만원)</th>
              <td>39,502</td>
              <td>29,885</td>
              <td>26,910</td>
              <td>26,910</td>
              <td>31,400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Stock;
