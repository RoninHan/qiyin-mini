import { NavBar } from "@nutui/nutui-react-taro";

import { CSSProperties } from "react";

// 导航栏
const Navbar = ({ title }: { title: string }) => {
  return (
    <NavBar
      style={
        {
          "--nutui-navbar-margin-bottom": "12px",
          "--nutui-navbar-background": "#2C2C2C",
          "--nutui-navbar-color": "#fff",
          "--nutui-navbar-title-font-color": "#fff",
          "--nutui-navbar-title-font-weight": "400",
          "--nutui-navbar-title-font-size": "20px",
        } as CSSProperties
      }
    >
      {title}
    </NavBar>
  );
};

export default Navbar;
