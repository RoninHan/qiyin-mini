import { Avatar } from "@nutui/nutui-react-taro";
import { Image, Text, View } from "@tarojs/components";
import rank from "public/rate/awards.svg";

import first from "public/rate/first.svg";
import second from "public/rate/second.svg";
import star from "public/rate/star.svg";
import third from "public/rate/third.svg";
import { ReactNode } from "react";

// 旁边带个星星的文本
const StarText = ({ children }: { children: ReactNode }) => {
  return (
    <View className="flex items-center flex-row gap-x-[2px]">
      <Text className="text-xs font-normal  text-white">{children}</Text>
      <Image src={star} className="w-4 h-4" />
    </View>
  );
};

const First = () => {
  return (
    <>
      <View className="absolute left-[40%] -top-16">
        {/* 用户头像框
        如何在框内添加头像：
        <View className="absolute top-0">
            <Image src={头像base64或url} className=" w-[59px] h-[72px]" />
        </View>
        */}
        <Image src={first} className=" w-[59px] h-[72px]" />
      </View>

      <View className=" absolute left-[42%] top-8 text-white text-center">
        <View className="flex flex-col">
          {/* 用户名 */}
          <Text className="text-sm font-medium">小月</Text>
          {/* 用户所获的星星数 */}
          <StarText>99.9w</StarText>
        </View>
      </View>
    </>
  );
};

const Second = () => {
  return (
    <>
      <View className="absolute -top-8 left-[13%]">
        {/* 用户头像框
        如何在框内添加头像：
        <View className="absolute top-0">
            <Image src={头像base64或url} className=" w-[59px] h-[72px]" />
        </View>
        */}
        <Image src={second} className="  w-[59px] h-[72px]" />
      </View>
      <View className=" absolute left-[13%] top-20 text-white text-center">
        <View className="flex flex-col">
          <Text className="text-sm font-medium">小月</Text>
          <StarText>99.9w</StarText>
        </View>
      </View>
    </>
  );
};

const Third = () => {
  return (
    <>
      <View className="absolute -top-8 right-[13%] ">
        {/* 用户头像框
        如何在框内添加头像：
        <View className="absolute top-0">
            <Image src={头像base64或url} className=" w-[59px] h-[72px]" />
        </View>
        */}
        <Image src={third} className="  w-[59px] h-[72px]" />
      </View>
      <View className=" absolute right-[13%] top-20 text-white text-center">
        <View className="flex flex-col">
          <Text className="text-sm font-medium">小月</Text>
          <StarText>99.9w</StarText>
        </View>
      </View>
    </>
  );
};

const RankAvatar = () => {
  return (
    <View className="fixed bottom-0 h-[50px] w-full flex-1 bg-[#FFBD5A] px-[22px] flex flex-row items-center justify-between">
      <View className="flex flex-row items-center">
        {/* 底部用户头像 */}
        <Avatar
          size="normal"
          src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
        <View className="flex flex-col leading-[18px] text-white pl-[10px]">
          {/* 底部用户名 */}

          <Text className="text-[13px] font-medium">走过海棠暮</Text>
          {/* 底部用户排名信息 */}

          <StarText>距离上一名 50</StarText>
        </View>
      </View>
      {/* 底部用户星星数 */}
      <StarText>9.5w</StarText>
    </View>
  );
};

const RankFooter = () => {
  return (
    <View className=" relative">
      <View className=" absolute -bottom-[50px] left-1  w-full  ">
        <Image src={rank} className="w-full " />
        {/* 第一名头像组件 */}

        <First />
        {/* 第二名头像组件 */}

        <Second />
        {/* 第三名头像组件 */}

        <Third />
      </View>
      {/* 排行榜底部用户头像 */}
      <RankAvatar />
    </View>
  );
};
export default RankFooter;
