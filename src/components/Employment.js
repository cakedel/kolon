import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import List from "./Board/List";
import Write from "./Board/Write";
import View from "./Board/View";
import Modify from "./Board/Modify";
import { Outlet } from "react-router-dom";

const Employment = () => {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const num = useRef(1);

  return (
    <section className="Employment section">
      <div className="inner">
        <Routes>
          <Route path="/*" element={<List list={list} />}></Route>
          <Route path="/view/:id" element={<View list={list} />}></Route>
          <Route
            path="/write"
            element={
              <Write
                list={list}
                setList={setList}
                input={input}
                setInput={setInput}
                num={num}
              />
            }
          ></Route>
          <Route
            path="/modify/:id"
            element={
              <Modify
                list={list}
                setList={setList}
                input={input}
                setInput={setInput}
                num={num}
              />
            }
          ></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Employment;
