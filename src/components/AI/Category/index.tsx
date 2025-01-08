import { View } from "@tarojs/components";
import DeviceSelect from "src/components/Follow/DeviceSelect";
import MenuButton from "src/components/MenuButton";

const Category = () => {
  return (
    <View className="px-[15px] flex flex-col gap-y-[12px]">
      <DeviceSelect />
      <View className="grid grid-cols-3 gap-x-[10px] h-[69px]">
        <MenuButton upText="MANDARIN" downText="流行" />
        <MenuButton upText="CANTONSES" downText="电子" />
        <MenuButton upText="ENGLISH" downText="民谣" />
      </View>
    </View>
  );
};

export default Category;
