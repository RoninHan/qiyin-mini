import { Image, View } from "@tarojs/components";
import waves from "public/waves.svg";

import music from "public/aimusic.svg";

const Waves = () => {
  return (
    <View className="flex justify-center w-full relative">
      <Image src={waves} className="w-full h-[84px] absolute top-0 left-0" />
      <View className=" w-[83px] h-[83px] flex items-center justify-center rounded-full bg-[#FFBD5A]">
        <Image src={music} className=" w-6 h-6 " />
      </View>
    </View>
  );
};

export default Waves;
