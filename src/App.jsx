// ReactからuseState関数を取り出す
import React, { useState } from "react";
import ColorFulMessage from "./components/ColorfulMessage";

const App = () => {
  // stateとして利用する変数名, Stateを変更する関数名
  // 動的な部分はStateで管理する。初期値・変数・更新関数をセットする
  const [num, setNum] = useState(0);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [untiShowFlag, setUntishowFlag] = useState(true);

  const onClickSwitchUntiFlag = () => {
    setUntishowFlag(!untiShowFlag);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorFulMessage color="blue">お元気ですか？</ColorFulMessage>
      <ColorFulMessage color="pink">元気です</ColorFulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchUntiFlag}>on/off</button>
      <p>{num}</p>
      {untiShowFlag && <p>unti</p>}
    </>
  );
};

export default App;
