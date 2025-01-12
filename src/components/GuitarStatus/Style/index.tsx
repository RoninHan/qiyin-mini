import { View } from "@tarojs/components";
import MenuButton from "src/components/MenuButton";

// 吉他样式/灯光
const Style = () => {
  return (
    <>
      <View className="h-[158px] grid  grid-cols-2 gap-x-[12px]">
        <MenuButton upText="Chord" downText="和弦" />
        <MenuButton upText="Drum Machine" downText="鼓机" />
      </View>

      <View className="h-[126px] grid  grid-cols-2 gap-x-[12px]">
        <MenuButton upText="Musical Instrument" downText="乐器" />
        <MenuButton upText="Light" downText="灯光" />
      </View>
    </>
  );
};

export default Style;
