import { View } from "@tarojs/components";
import MenuButton from "src/components/MenuButton";

// 吉他样式/灯光
const Style = () => {
  return (
    <>
      <View className="h-[182px] grid  grid-cols-2 gap-x-[12px]">
        <MenuButton upText="Chord Patterns" downText="和弦样式" />
        <MenuButton upText="Drum Machine Patterns" downText="鼓机样式" />
      </View>

      <View className="h-[126px] grid  grid-cols-2 gap-x-[12px]">
        <MenuButton upText="Musical" downText="乐器更换" />
        <MenuButton upText="Light" downText="灯光" />
      </View>
    </>
  );
};

export default Style;
