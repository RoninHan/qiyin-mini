import { Image, View } from "@tarojs/components";
import DeviceSelect from "../Follow/DeviceSelect";
import FooterBar from "../FooterBar";
// import Navbar from "../Navbar";

import guitar from "public/guitarshow.svg";

import { Provider } from "jotai";
import Category from "./Category";
import RateModal from "./RateModal";
import Stat from "./Stat";
import Style from "./Style";
import ToneModal from "./ToneModal";

const GuitarStatus = () => {
  return (
    <Provider>
      {/* 音调弹出 */}
      <ToneModal />
      {/* 速率弹出 */}
      <RateModal />
      <View className="bg-black min-h-screen w-full flex flex-col">
        {/* <Navbar title="吉他状态" /> */}
        <View className="flex-1 flex flex-col gap-y-[12px] px-[15px] my-[14px]">
          <DeviceSelect />
          <View className="flex flex-row gap-x-[12px] relative ">
            {/* 吉他状态 */}
            <Category />
            {/* 吉他图 */}
            <Image src={guitar} className="w-[168px] h-[279px] mb-2" />
            {/* 吉他电量/音量 */}
            <Stat />
          </View>
          {/* 吉他样式/灯光 */}
          <Style />
        </View>

        <FooterBar />
      </View>
    </Provider>
  );
};

export default GuitarStatus;
