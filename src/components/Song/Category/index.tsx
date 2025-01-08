import { SearchBar } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import { CSSProperties } from "react";

import MenuButton from "src/components/MenuButton";
import "./index.less";

const Category = () => {
  return (
    <View className="w-full px-[15px]  flex flex-col gap-y-[12px]">
      <View
        className="w-full "
        style={
          {
            "--nutui-searchbar-input-height": "38px",
            "--nutui-searchbar-padding": 0,
          } as CSSProperties
        }
      >
        {/* 顶部搜索栏 */}
        <SearchBar shape="round" />
      </View>
      {/* 歌曲分类 */}
      <View className=" grid grid-cols-3 h-[69px]  gap-x-[10px]">
        <MenuButton upText="MANDARIN" downText="国语" />
        <MenuButton upText="CANTONSES" downText="粤语" />
        <MenuButton upText="ENGLISH" downText="英语" />
      </View>

      <View className="grid grid-cols-2  h-[69px]  gap-x-[9px]">
        <MenuButton upText="OTHER" downText="其他" />
        <MenuButton upText="ALL" downText="全部" />
      </View>
    </View>
  );
};

export default Category;
