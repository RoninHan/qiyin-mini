import { View } from "@tarojs/components";
import FooterBar from "../FooterBar";
import Navbar from "../Navbar";
import Category from "./Category";

import List from "./List";

const Song = () => {
  return (
    <View className="bg-black overflow-hidden h-screen w-full flex flex-col">
      <Navbar title="歌曲" />
      <View className="flex-1 flex flex-col gap-y-[12px]">
        {/* 歌曲分类 */}
        <Category />
        {/* 歌曲List */}
        <List />
      </View>
      <FooterBar />
    </View>
  );
};

export default Song;
