import { Progress } from "@nutui/nutui-react-taro";
import { Text, View } from "@tarojs/components";
import { CSSProperties } from "react";

const Level = () => {
  return (
    <View className="flex flex-col gap-y-3  mt-2">
      {/* 等级 */}
      <Text className="text-white font-bold pl-1">Level 3</Text>
      {/* 等级进度条 */}
      <Progress
        style={
          {
            "--nutui-progress-background": "#313030",
            "--nutui-progress-color": "#FFBD5A",
            "--nutui-progress-text-border-radius": 0,
            "--nutui-progress-border-radius": "20px",
          } as CSSProperties
        }
        percent={60}
        strokeWidth="20"
      />
    </View>
  );
};

export default Level;
