import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // ボタンを押されたら
  const onClickButton = () => alert();
  return (
    <>
      <h1>皆さん初めまして</h1>
      {/* Proposの記載方法(値の受け渡し) */}
      <ColorfulMessage color="blue" message="お元気ですか?" />
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// ほかのファイルでも使用可能を示す
export default App;
