import { Menu } from "@nutui/nutui-react-taro";
import { Image, Text, View } from "@tarojs/components";

import { useState } from "react";

import downArrow from "public/downarrow.svg";

import phone from "public/phone.svg";

import "./index.less";

const DeviceSelect = () => {
  const [isExpand, setExpand] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <Menu
      activeColor="#FFBD5A"
      className="custom-menu"
      onClose={() => setExpand(false)}
      onOpen={() => setExpand(true)}
      icon={
        <Image
          src={downArrow}
          className=" w-[14px] h-[14px] pr-[14px] transition-all"
        />
      }
    >
      <Menu.Item
        inactiveTitleClass="!text-white"
        onChange={(e) => setSelected(e.text)}
        options={[
          { text: "默认排序", value: "a" },
          { text: "好评排序", value: "b" },
          { text: "销量排序", value: "c" },
        ]}
        icon={<></>}
        title={
          <View className="flex flex-row gap-x-2  items-center ">
            <Image src={phone} className="w-[21px] h-5" />
            <Text className=" text-xs">默认排序</Text>
          </View>
        }
      />
    </Menu>
  );
};

export default DeviceSelect;
