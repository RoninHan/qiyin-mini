import { Image, Text, View } from "@tarojs/components";

import album from "public/testalbum.png";

// 歌曲详情
const Info = () => {
  return (
    <View className=" mt-[30px] flex flex-row gap-x-6 z-10">
      <Image src={album} className="w-[84px] h-[80px]" />
      <View className="flex flex-col flex-1 font-bold justify-center">
        <View className="flex flex-row justify-between text-xl text-white">
          {/* 歌名 */}
          <Text> 旅行的意义</Text>
          {/* 什么调子的 */}

          <Text className="text-[#FFBD5A]">D调</Text>
        </View>
        {/* 时长 */}

        <Text className="text-[#8A9A9D] text-[15px] ">4:19</Text>
      </View>
    </View>
  );
};

export default Info;
