import { View } from "@tarojs/components";
import MenuButton from "src/components/MenuButton";

const Menu = () => {
  return (
    <View className="mt-[29px] grid grid-cols-3 gap-x-[10px] px-[15px]">
      <MenuButton upText="Collect" downText="收藏" />
      <MenuButton upText="Creation" downText="创作" />
      <MenuButton upText="Friends" downText="好友" />
    </View>
  );
};

export default Menu;
