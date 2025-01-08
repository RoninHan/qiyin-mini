import { Button, ButtonProps } from "@nutui/nutui-react-taro";
import { Image, Text, View } from "@tarojs/components";
import { CSSProperties } from "react";

import "./index.less";

interface MenuButtonProps {
  // 上文字
  upText: string;
  // 下文字
  downText: string;
  // 左上角图标
  menuIcon?: string;
  // 是否激活
  isActive?: boolean;
}

// 目录按钮
const MenuButton = ({
  menuIcon,
  upText,
  downText,
  isActive,
  ...props
}: MenuButtonProps & Partial<ButtonProps>) => {
  return (
    <View className="full-size relative">
      {menuIcon && (
        <Image src={menuIcon} className="w-5 h-5 absolute left-1 top-1 z-50" />
      )}
      <Button
        style={
          {
            "--nutui-button-border-radius": "10px",
            "--nutui-button-default-background-color": "#2C2C2C",
            "--nutui-button-default-border-color": "#2C2C2C",
            "--nutui-button-normal-padding": "9px 16px",
          } as CSSProperties
        }
        {...props}
        fill="solid"
      >
        <View
          className=" !text-base"
          style={{
            color: isActive ? "#FFBD5A" : "white",
          }}
        >
          <Text className="font-bold leading-5 block font-['Aharoni']">
            {upText}
          </Text>
          {downText}
        </View>
      </Button>
    </View>
  );
};

export default MenuButton;
