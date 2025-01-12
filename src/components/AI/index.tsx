import { View, Text } from "@tarojs/components";
import FooterBar from "../FooterBar";
// import Navbar from "../Navbar";

import Category from "./Category";
import LyricsProgress from "./LyricsProgress";
import Waves from "./Waves";

const AI = () => {
  return (
    <View className="bg-black min-h-screen w-full flex flex-col">
      {/* <Navbar title="AI写歌" /> */}
      <View className="flex-1 flex flex-col gap-y-[12px]  my-[14px]">
        {/* 分类 */}
        <Category />
        <View className=" h-[220px] w-full px-[15px] mb-4">
          <View className="bg-[#2C2C2C] w-full h-full ">
            <View className="h-[40px] flex flex-col justify-center pl-4">
              <Text className="text-white">输入提示词</Text>
            </View>
            <View className="bg-[#FFBD5A] h-[1px] w-full"></View>
            <View className="h-[130px] p-4">
              <Text className="text-[#FFBD5A]">描述想要写的歌词</Text>
            </View>
            <View className="bg-[#FFBD5A] h-[1px] w-full"></View>
            <View className="h-[50px] flex flex-row  justify-end items-center gap-4 pr-4">
              <View className="border w-[65px] rounded-md border-[#FFBD5A] flex flex-row h-[30px] justify-center items-center"><Text className="text-white">确认</Text></View>
              <View className="border w-[65px] rounded-md border-[#FFBD5A] flex flex-row h-[30px] justify-center items-center"><Text className="text-white">修改</Text></View>
            </View>
          </View>


        </View>
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
