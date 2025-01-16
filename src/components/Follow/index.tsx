import { View } from "@tarojs/components";
import DeviceSelect from "./DeviceSelect";
import Header from "./Header";
import Info from "./Info";
import Lyrics from "./Lyrics";

import { Provider } from "jotai";
import "./index.less";
import Settings from "./Settings";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

// 弹唱跟随页面
const Follow = () => {

  useEffect(() => {
    console.log("Follow");
  }, []);



  return (
    <Provider>
      <Settings />
      <View className="bg-black overflow-hidden h-screen w-full flex flex-col">
        <View className="px-[32px] flex-1 flex flex-col">
          {/* 顶部图表栏 */}
          <Header />
          {/* 设备选择 */}
          <View className="mt-10">
            <DeviceSelect />
          </View>
          {/* 歌词信息 */}
          <Info />
          {/* 歌词部分 */}
          <Lyrics />
        </View>
      </View>
    </Provider>
  );
};

export default Follow;
