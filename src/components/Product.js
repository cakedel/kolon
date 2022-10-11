import React from "react";

const Product = () => {
  return (
    <section className="Product section">
      <div className="inner slogan">
        <h3>고객가치의 실현을 위한 사업 포트폴리오</h3>
        <div className="titExplain">
          코오롱인더스트리는 자동차소재, 첨단소재 등을 생산하고 있는 산업자재,
          각종 산업 및 생활에 쓰이는 화학, 디스플레이, 태양광 등에 쓰이는
          필름/전자재료 및 패션과 문화를 선도하는 FnC까지 총 4개 사업부문을
          주축으로 하여 사업을 영위하고 있습니다.
        </div>
      </div>
      <div className="container protect">
        <div className="left">
          <div className="top">
            <strong>Protect</strong>
            <div className="explain">
              산업자재는 방탄, 내열에 쓰이는 아라미드부터 에어백, 안전벨트용
              원사 등 다양한 제품군을 통해 고객의 소중한 일상을 지킵니다.
            </div>
          </div>
          <div className="bottom">
            <div className="item01">타이어코오드</div>
            <div className="item02">SPB</div>
            <div className="item03">에어백</div>
            <div className="item04">연료전지용 수분제어장치</div>
            <div className="item05">산업용사</div>
            <div className="item06">PEM</div>
            <div className="item07">아라미드</div>
            <div className="item08">MEA</div>
            <div className="item09">Chamude</div>
            <div className="item10">VENT</div>
          </div>
        </div>
        <figure className="right item01"></figure>
      </div>
      <div className="container cover">
        <div className="left">
          <div className="top">
            <strong>Cover</strong>
            <div className="explain">
              필름/전자재료는 다른 소재 겉면 또는 중간재에 사용되어 수분과 공기,
              외부 충격으로부터 막아주고 기능을 강화하는 역할을 수행합니다.
            </div>
          </div>
          <div className="bottom">
            <div className="item01">폴리에스터필름</div>
            <div className="item02">프리즘필름</div>
            <div className="item03">나일론필름</div>
            <div className="item04">드라이필름</div>
            <div className="item05">배리어필름</div>
            <div className="item06">패널재료</div>
            <div className="item07">증착필름</div>
            <div className="item08">CPI</div>
          </div>
        </div>
        <figure className="right item02"></figure>
      </div>
      <div className="container connect">
        <div className="left">
          <div className="top">
            <strong>Connect</strong>
            <div className="explain">
              화학 부문은 접착제용 첨가제, 점접착 부여제,복합소재 등 혼자 쓰이는
              것이 아닌 소재와 소재, 사람과 소재를 연결하는 역할을 통해 고객이
              최고의 가치를 얻을 수 있도록 돕습니다.
            </div>
          </div>
          <div className="bottom">
            <div className="item01">석유수지</div>
            <div className="item02">에폭시수지</div>
            <div className="item03">페놀수지</div>
            <div className="item04">PET수지</div>
          </div>
        </div>
        <figure className="right item03"></figure>
      </div>
      <div className="container fnc">
        <div className="left">
          <div className="top">
            <strong>FnC</strong>
            <div className="explain">
              1973년 '코오롱스포츠’를 시작으로 골프, 남성, 여성, 잡화는 물론
              해외 프리미엄 레이블까지 30여 개 브랜드를 보유와 함께 생활 속
              다양한 가치를 제공하는 국내 대표 패션 기업입니다.
            </div>
          </div>
          <div className="bottom">
            <div className="item01">FnC</div>
          </div>
        </div>
        <figure className="right item04"></figure>
      </div>
    </section>
  );
};

export default Product;
