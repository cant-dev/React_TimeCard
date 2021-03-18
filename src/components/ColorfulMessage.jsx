import React from "react";

const ColorFulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontsize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorFulMessage;

// コンポーネントに対して、props(引数)を渡して、コンポーネントで定義された変数・関数を適応して要素を返す。

// 分割代入
// 配列やオブジェクトが定義された変数・引数に対して、 引数対応するオブジェクトや配列を定義することによって、内容を代入したオブジェクトを生成することができる。
