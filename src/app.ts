import { useDidHide, useDidShow } from "@tarojs/taro";
import { useEffect } from "react";
// 全局样式
import "@nutui/nutui-react-taro/dist/styles/theme-dark.scss";
import "./app.less";

import "fastestsmallesttextencoderdecoder";

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {});

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return props.children;
}

export default App;
