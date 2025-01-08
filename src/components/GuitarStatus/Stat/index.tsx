import { Text, View } from "@tarojs/components";

// 电量/音量显示组件, percentage百分比
const Battery = ({ percentage }: { percentage: number }) => {
  return (
    <View className="p-[2px] relative rounded bg-white/35 w-9 h-fit">
      <View
        style={{
          width: `${percentage}%`,
        }}
        className="h-[10px] bg-[#FFBD5A] rounded-sm"
      ></View>

      <Text className=" absolute text-[10px] leading-[14px] top-0 w-full text-center ">
        {percentage} %
      </Text>
    </View>
  );
};

// 吉他电量/音量
const Stat = () => {
  return (
    <View className=" absolute w-[168px] right-0 bottom-0 rounded-[10px] text-white px-[5px] py-[3px] bg-[#2C2C2C] leading-5  ">
      <View className="flex justify-between w-full ">
        <View className="flex flex-row gap-x-1  items-center text-[15px] leading-5">
          <Text>电量</Text>
          <Battery percentage={22} />
        </View>
        <View className="flex flex-row gap-x-1  items-center">
          <Text>音量</Text>
          <Battery percentage={45} />
        </View>
      </View>
    </View>
  );
};

export default Stat;
