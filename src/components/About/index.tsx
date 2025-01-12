import { View } from "@tarojs/components";
import FooterBar from "../FooterBar";
// import Navbar from "../Navbar";

import Info from "./Info";
import Links from "./Links";
import Menu from "./Menu";

const About = () => {
  return (
    <View className="bg-black min-h-screen w-full flex flex-col">
      {/* <Navbar title="个人中心" /> */}
      <View className="flex-1 flex flex-col">
        {/* 用户详情 */}
        <Info />
        {/* 个人信息菜单 */}
        <Menu />
        {/* 用户链接 */}
        <Links />
      </View>

      <FooterBar />
    </View>
  );
};

export default About;
