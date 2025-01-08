import { Image, View } from "@tarojs/components";
import circle from "public/rate/circle.svg";
import Stat from "../Stat";

const StatBar = () => {
  return (
    <View className="flex flex-row gap-x-[40px] mt-8">
      <Image src={circle} className="w-[172px] h-[172px]" />
      <View className="flex flex-col gap-y-2 py-3">
        {/* 排行榜右边的信息 */}
        <Stat data="89%" desc="正确率" className="bg-[#FFBD5A]" />
        <Stat data="4" desc="好友排名" className="bg-[#FF6A3B]" />
        <Stat data="99999" desc="社区排名" className="bg-[#FFF3AB]" />
      </View>
    </View>
  );
};

export default StatBar;
