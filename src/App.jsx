import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffectは、第二引数に空配列を入れると最初の一回しか読み込まなくなる
  //useEffectは、第二引数に変数を入れるとその変数が変化するたびに処理が走る
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // ||を使用しているのでfalseの時のみ
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // &&を使用しているのでfalseの時のみ
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(-_-)</p>}
    </>
  );
};

export default App;
