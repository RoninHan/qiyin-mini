import { Badge } from "@nutui/nutui-react-taro";
import { Image, View } from "@tarojs/components";
import { useSetAtom } from "jotai";

// import arrow from "public/arrow/Vector.svg";

import bell from "public/bell.svg";
import settings from "public/settings.svg";
import { settingsAtom } from "../hooks/useSettings";

// 顶部图表栏
const Header = () => {
  const setOpen = useSetAtom(settingsAtom);
  return (
    <View className=" flex flex-row justify-between w-full items-center">
      {/* <Image src={arrow} className="w-[26px] h-[32px]" /> */}
      <View className=" flex flex-row gap-x-[28px]">
        <Badge right="17" dot top="3" color="#FFBD5A">
          <Image src={bell} className=" w-5 h-5" />
        </Badge>
        <Image
          src={settings}
          onClick={() => setOpen(true)}
          className=" w-5 h-5"
        />
      </View>
    </View>
  );
};

export default Header;
