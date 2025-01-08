import { View } from "@tarojs/components";
import { useSetAtom } from "jotai";

import MenuButton from "src/components/MenuButton";
import { rateModalAtom, toneModalAtom } from "../hooks/usePicker";

import arrow from "public/guitar/arrow.svg";
import pulse from "public/guitar/pulse.svg";
import settings from "public/guitar/settings.svg";

// 吉他状态
const Category = () => {
  const setRateOpen = useSetAtom(rateModalAtom);
  const setToneOpen = useSetAtom(toneModalAtom);
  return (
    <View className=" grid grid-cols-1 gap-y-[12px] flex-1">
      <MenuButton
        menuIcon={pulse}
        onClick={() => setToneOpen(true)}
        upText="Tone"
        downText="音调"
      />
      <MenuButton
        menuIcon={settings}
        upText="Chord Mapping"
        downText="和旋映射"
      />
      <MenuButton
        onClick={() => setRateOpen(true)}
        menuIcon={arrow}
        upText="Rate"
        downText="速率"
      />
    </View>
  );
};

export default Category;
