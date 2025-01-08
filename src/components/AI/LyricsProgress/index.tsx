import { Image, Text, View } from "@tarojs/components";

import love from "public/ai/love.svg";
import share from "public/ai/share.svg";

import eq from "public/music/equalizer.svg";
import left from "public/music/left.svg";
import pause from "public/music/pause.svg";
import plus from "public/music/plus.svg";
import right from "public/music/right.svg";
import ProgressBar from "./ProgressBar";

const LyricsProgress = () => {
  return (
    <View className="px-[23px]">
      <View className="mt-[19px]  text-white  text-center relative mb-4">
        <Text className="font-bold ">AI正在生成</Text>
        <View className="flex flex-row gap-x-[19px] right-0 absolute top-0">
          <Image src={share} className=" w-[18px] h-[18px] " />
          <Image src={love} className=" w-[18px] h-[18px] " />
        </View>
      </View>

      <ProgressBar />

      <View className="relative  mt-[15px] flex items-center justify-center ">
        <View>
          <Image src={left} className="w-4 h-5" />

          <Image src={pause} className="w-5 h-5  px-11" />

          <Image src={right} className="w-4 h-5" />
        </View>

        <View className="flex flex-row gap-x-[23px] absolute right-0 top-0 h-5 items-center">
          <Image src={eq} className="w-4 h-4" />

          <Image src={plus} className="w-4 h-4" />
        </View>
      </View>
    </View>
  );
};

export default LyricsProgress;
