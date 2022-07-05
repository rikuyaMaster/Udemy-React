// 新規の書き方
// import { StrictMode } from "react";
// import ReactDom from "react-dom";

// import App from "./App";

// ReactDom.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

// --------------ここから講義--------------
// 現在はReactのインポートの書き方は不要
// import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
