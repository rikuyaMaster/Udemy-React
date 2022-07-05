import { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // ボタンを押されたら
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // 第一引数：変数名、第二引数：関数名
  // この状態だとnumに0が代入されている
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>皆さん初めまして</h1>
      {/* Proposの記載方法(値の受け渡し) */}
      <ColorfulMessage color="blue" message="お元気ですか?" />
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

// ほかのファイルでも使用可能を示す
export default App;
