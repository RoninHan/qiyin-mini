import { View } from "@tarojs/components";
import Navbar from "../Navbar";

import DeviceSelect from "../Follow/DeviceSelect";

import "./index.less";
import Level from "./Level";
import Rank from "./Rank";
import RankFooter from "./RankFooter";
import StatBar from "./StatBar";

const Rate = () => {
  return (
    <View className="bg-black overflow-hidden h-screen w-full flex flex-col">
      <Navbar title="评分" />
      <View className="px-[15px] flex-1 flex flex-col">
        {/*设备选择 */}
        <DeviceSelect />
        {/* Level等级 */}
        <Level />
        {/* 排名信息 */}
        <StatBar />
        {/* 排行榜信息，好友/全球，日/周 */}
        <Rank />
      </View>
      {/* 排行榜 */}
      <RankFooter />
    </View>
  );
};

export default Rate;
