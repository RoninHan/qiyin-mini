import { View } from "@tarojs/components";
import { ReactNode } from "react";

import "./index.less";

enum MarkType {
  C = "C",
  F = "F",
  Am = "Am",
  G = "G",
}

const color = {
  [MarkType.C]: "#FF6A3B",
  [MarkType.F]: "#00C2CB",
  [MarkType.Am]: "#2DA7FF",
  [MarkType.G]: "#5C5CFF",
};

interface MarkProps {
  // 标记类型
  type: string;
  // 是否展示放大缩小的动画
  isActive?: boolean;
  children?: ReactNode;
}

// 歌词标记
const Mark = ({ type, isActive, children }: MarkProps) => {
  return (
    <View className="text-center relative">
      <View
        className={`w-8 h-8 bg-[#FFBD5A]/40  text-center leading-8 rounded-[5px] tracking-normal mx-2 ${
          isActive ? "scale-animation" : ""
        }`}
      >
        {children}
      </View>
      <View
        className="w-8 h-8 absolute mx-2 bottom-[100%] flex justify-center items-center"
        style={{
          color: color[type],
        }}
      >
        {type}
      </View>
    </View>
  );
};

export { Mark, MarkType };
