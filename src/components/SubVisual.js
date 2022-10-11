import React from "react";
import { useParams } from "react-router-dom";

const SubVisual = ({ GNbar }) => {
  //   const { id } = useParams;
  const params = useParams(1);
  return (
    <div className={"SubVisual item0" + params.id}>
      <h2>{GNbar[params.id - 1].tit}</h2>
      {/* <button onClick={console.log(id)}>click</button> */}
    </div>
  );
};

export default SubVisual;
