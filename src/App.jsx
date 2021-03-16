import React from "react";
import ColorFulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorFulMessage color="blue">お元気ですか？</ColorFulMessage>
      <ColorFulMessage color="pink">元気です</ColorFulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
