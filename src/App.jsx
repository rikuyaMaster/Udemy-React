const App = () => {
  // ボタンを押されたら
  const onClickButton = () => alert();
  // cssのスタイル
  const contentStyle = {
    color: "blue",
    // キャメルケースで大文字で記載
    fontSize: "32px"
  };
  return (
    <>
      <h1 style={contentStyle}>Hello World</h1>
      <p>How are you?</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// ほかのファイルでも使用可能を示す
export default App;
