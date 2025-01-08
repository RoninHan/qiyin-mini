import { View } from "@tarojs/components";

import { Tabs } from "@nutui/nutui-react-taro";
import { CSSProperties, ReactNode, useState } from "react";

const RankButton = ({
  children,
  isActive,
  onActive,
}: {
  children: ReactNode;
  isActive: boolean;
  onActive: () => void;
}) => {
  return (
    <View
      onClick={onActive}
      style={{
        color: isActive ? "#fff" : "rgb(255 255 255 / 0.8)",
        background: isActive ? "#FFBD5A" : "transparent",
      }}
      className="flex justify-center items-center w-[62px] h-[28px] rounded-[17px] "
    >
      {children}
    </View>
  );
};

const Rank = () => {
  const [rankType, setRankType] = useState("好友榜");
  const [rankTime, setRankTime] = useState("日");
  return (
    <View className="w-full flex flex-col items-center gap-y-[15px]">
      {/* 好友榜/全球榜 */}
      <Tabs
        value={rankType}
        onChange={(s) => setRankType(s as string)}
        className="rate-tab"
        style={
          {
            "--nutui-tabs-titles-item-color": "rgb(255 255 255 / 0.6)",
            "--nutui-tabs-tab-line-height": "4px",
            "--nutui-tabs-tab-line-width": "14px",
            "--nutui-tabs-tabpane-backgroundColor": "transparent",
            "--nutui-tabs-titles-item-min-width": "48px",
            "--nutui-tabs-titles-font-size": "16px",
            "--nutui-tabs-titles-height": "40px",
            "--nutui-tabs-line-bottom": "0",
            "--nutui-tabs-tab-line-color": "#fff",
            "--nutui-tabs-tabpane-padding": "0",
            "--nutui-tabs-titles-item-active-color": "#fff",
          } as CSSProperties
        }
      >
        <Tabs.TabPane value="好友榜" title="好友榜" />
        <Tabs.TabPane value="全球榜" title="全球榜" />
      </Tabs>

      <View>
        {/* 日/周榜 */}
        <View className="bg-white/15  flex flex-row rounded-[17px]  text-sm ">
          <RankButton
            isActive={rankTime === "日"}
            onActive={() => setRankTime("日")}
          >
            日
          </RankButton>
          <RankButton
            isActive={rankTime === "周"}
            onActive={() => setRankTime("周")}
          >
            周
          </RankButton>
        </View>
      </View>
    </View>
  );
};

export default Rank;
