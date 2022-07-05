// Propsの値の受け取り方
const ColorfulMessage = (props) => {
  console.log(props);
  const { color, message } = props;
  // cssのスタイル
  const contentStyle = {
    color: color,
    // キャメルケースで大文字で記載
    fontSize: "32px"
  };

  // propsの表示
  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
