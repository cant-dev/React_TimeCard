import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));

// Reactでは関数を使って画面の要素である、コンポーネントを表現する
// {} : ブラケット
// ReactDOMライブラリのrender関数でAppをレンダリングする。
// 第二引数でどこに表現するか指定する。

// JSのなか関数にリターンして、htmlに返していく。
// returnする要素は、１つのタグで囲わないといけない
