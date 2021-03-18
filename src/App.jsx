import React, { useState } from "react";
import ColorFulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorFulMessage color="blue">お元気ですか？</ColorFulMessage>
      <ColorFulMessage color="pink">元気です</ColorFulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
