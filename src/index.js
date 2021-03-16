// Reactでは関数を使って画面の要素である、コンポーネントを表現する
// {} : ブラケット
// ReactDOMライブラリのrender関数でAppをレンダリングする。
// 第二引数でどこに表現するか指定する。

// JSのなか関数にリターンして、htmlに返していく。
// returnする要素は、１つのタグで囲わないといけない

import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
