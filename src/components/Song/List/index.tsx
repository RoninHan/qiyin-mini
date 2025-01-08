import { Tabs } from "@nutui/nutui-react-taro";
import { Text, View } from "@tarojs/components";

import Taro from "@tarojs/taro";
import { CSSProperties } from "react";

import "./index.less";

// 歌曲元素
const SongItem = ({ title, singer }: { title: string; singer: string }) => {
  return (
    <View
      className="py-1 leading-5 flex flex-col"
      // 需要自行替换链接
      onClick={() =>
        Taro.navigateTo({
          url: "/pages/follow/index",
        })
      }
    >
      <Text className="text-white">{title}</Text>
      <Text className="text-[#979797] text-xs">{singer}</Text>
    </View>
  );
};

const List = () => {
  return (
    <View>
      <Tabs
        activeType="button"
        align="left"
        className="size-tab"
        style={
          {
            "--nutui-tabs-tabpane-backgroundColor": "#2C2C2C",
            "--nutui-tabs-tabpane-padding": "0 20px",
          } as CSSProperties
        }
      >
        <Tabs.TabPane title="热门榜">
          <View className="flex flex-col gap-y-3">
            <SongItem singer="陈" title="旅行的意义" />
            <SongItem singer="陈" title="旅行的意义" />

            <SongItem singer="陈" title="旅行的意义" />
          </View>
        </Tabs.TabPane>
        <Tabs.TabPane title="最新榜">
          <View>2222</View>
        </Tabs.TabPane>
      </Tabs>
    </View>
  );
};

export default List;
