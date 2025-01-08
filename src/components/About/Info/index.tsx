import { Image, Text, View } from "@tarojs/components";

import avatar from "public/testavatar.png";

const Info = () => {
  return (
    <View className="mt-10 flex flex-col items-center ">
      {/** 用户头像 */}
      <Image src={avatar} className=" w-[106px] h-[106px]" />

      <View className="mt-[13px] flex flex-col text-center">
        <Text className=" text-[#FFBD5A] text-[20px] leading-[24px]">
          {/** 用户名 */}
          噜啦噜
        </Text>
        <Text className="text-[#C8C8C8] text-sm leading-[28px]">
          {/** 用户名签名 */}
          纯粹热爱音乐！
        </Text>
      </View>
    </View>
  );
};

export default Info;
