import { Text, View } from "@tarojs/components";

// 排行榜竖着的文字
const Stat = ({
  data,
  desc,
  className,
}: {
  data: string;
  desc: string;
  className: string;
}) => {
  return (
    <View className="flex flex-row text-white gap-x-2 items-center">
      <View className={`${className}  w-1 h-full rounded-sm`}></View>
      <View className="flex flex-col">
        <Text className=" font-bold text-2xl leading-6">{data}</Text>
        <Text className=" text-xs leading-5 text-[#BDBDBD]">{desc}</Text>
      </View>
    </View>
  );
};

export default Stat;
