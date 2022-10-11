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
        <h3>주가정보</h3>
        <strong>{yesterday} 기준</strong>
        <table className="stocktable">
          <tbody>
            <tr>
              <th className="stockNum" rowSpan={2}>
                {stockNum.toLocaleString()}
              </th>
              <td className="topTitle bottomLine">전일대비</td>
              <td className="topTitle bottomLine">등락률</td>
              <td className="topTitle bottomLine">시가</td>
              <td className="topTitle bottomLine">고가</td>
              <td className="topTitle bottomLine">저가</td>
              <td className="topTitle bottomLine">거래량</td>
            </tr>
            <tr>
              <td className="bottomValue">{vsStocknum.toLocaleString()}</td>
              <td className="bottomValue">{kolonStock.fltRt}</td>
              <td className="bottomValue">{kolonStock.mkp}</td>
              <td className="bottomValue">{kolonStock.hipr}</td>
              <td className="bottomValue">{kolonStock.lopr}</td>
              <td className="bottomValue">{trquStockNum.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="inner">
        <h3>배당정보</h3>
        <table className="divideInfo">
          <thead>
            <tr className="content">
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
            <tr className="content">
              <th className="title" rowSpan={2}>
                주당현금배당(원)
              </th>
              <td className="stockSort">보통주</td>
              <td className="number">1,300</td>
              <td className="number">1,000</td>
              <td className="number">900</td>
              <td className="number">900</td>
              <td className="number">1,100</td>
            </tr>
            <tr>
              <td className="stockSort">우선주</td>
              <td className="number">1,350</td>
              <td className="number">1,050</td>
              <td className="number">950</td>
              <td className="number">950</td>
              <td className="number">1,150</td>
            </tr>
            <tr className="content">
              <th className="title" rowSpan={2}>
                현금배당수익률(%)
              </th>
              <td className="stockSort">보통주</td>
              <td className="number">1.8%</td>
              <td className="number">2.5%</td>
              <td className="number">1.8%</td>
              <td className="number">1.7%</td>
              <td className="number">1.4%</td>
            </tr>
            <tr>
              <td className="stockSort">우선주 </td>
              <td className="number">3.8%</td>
              <td className="number">4.7%</td>
              <td className="number">4.3%</td>
              <td className="number">3.8%</td>
              <td className="number">3.4%</td>
            </tr>
            <tr>
              <th className="title" colSpan={2}>
                현금배당금 총액(백 만원)
              </th>
              <td className="number">39,502</td>
              <td className="number">29,885</td>
              <td className="number">26,910</td>
              <td className="number">26,910</td>
              <td className="number">31,400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Stock;
