import { View } from "@tarojs/components";
import FooterBar from "../FooterBar";
import Navbar from "../Navbar";

import Category from "./Category";
import LyricsProgress from "./LyricsProgress";
import Waves from "./Waves";

const AI = () => {
  return (
    <View className="bg-black min-h-screen w-full flex flex-col">
      <Navbar title="AI写歌" />
      <View className="flex-1 flex flex-col gap-y-[12px]  my-[14px]">
        {/* 分类 */}
        <Category />
        {/* 音乐波纹 */}
        <Waves />
        {/* 歌曲操控组件 */}
        <LyricsProgress />
      </View>
      {/* 底部导航栏 */}
      <FooterBar />
    </View>
  );
};

export default AI;
