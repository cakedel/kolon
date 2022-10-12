import React from "react";

const Write = ({ list, setList, input, setInput, num }) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, id: num.current });
  };

  const submitBorad = () => {
    setList([...list, input]);
    num.current++;
    setInput({
      ...input,
      sort: "",
      company: "",
      title: "",
      content: "",
      date: "",
    });
  };
  return (
    <div>
      <select
        type="text"
        value={input.sort || ""}
        name="sort"
        onChange={handleInput}
      >
        <option value="선택">선택</option>
        <option value="경력">경력</option>
        <option value="신입">신입</option>
      </select>
      <input
        type="text"
        value={input.company || ""}
        name="company"
        onChange={handleInput}
      />
      <input
        type="text"
        value={input.title || ""}
        name="title"
        onChange={handleInput}
      />
      <input
        type="text"
        value={input.content || ""}
        name="content"
        onChange={handleInput}
      />
      <input
        type="text"
        value={input.date || ""}
        name="date"
        onChange={handleInput}
      />
      <button className="writeBtn" onClick={submitBorad}>
        글쓰기
      </button>
    </div>
  );
};

export default Write;
