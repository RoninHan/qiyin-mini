import { Tabbar } from "@nutui/nutui-react-taro";

import Taro, { useRouter } from "@tarojs/taro";
import { CSSProperties } from "react";
import { Guitar, Menu, Music, Personal } from "./Icon";

// 底部导航栏
const FooterBar = () => {
  const router = useRouter();

  const handleSwitch = (n: number) => {
    console.log(n);

    switch (n) {
      case 0:
        Taro.redirectTo({
          url: "/pages/guitar/index",
        });
        break;
      case 1:
        Taro.redirectTo({
          url: "/pages/song/index",
        });
        break;
      case 2:
        Taro.redirectTo({
          url: "/pages/ai/index",
        });
        break;
      case 3:
        Taro.redirectTo({
          url: "/pages/about/index",
        });
        break;
    }
  };

  return (
    <Tabbar
      style={
        {
          "--nutui-tabbar-border-bottom": "0",
          "--nutui-tabbar-border-top": "0",
        } as CSSProperties
      }
      onSwitch={handleSwitch}
      className="!bg-[#FFBD5A]"
    >
      {/* 吉他 */}
      <Tabbar.Item
        key={0}
        icon={
          <Guitar
            isActive={router.path.includes("/pages/guitar")}
            // 修复第一个无法点击的bug，nutui真是一堆bug
            onClick={() => handleSwitch(0)}
          />
        }
      />
      {/* 歌曲列表 */}

      <Tabbar.Item
        key={1}
        icon={<Music isActive={router.path.includes("/pages/song")} />}
      />
      {/* AI生成 */}

      <Tabbar.Item
        key={2}
        icon={<Menu isActive={router.path.includes("/pages/ai")} />}
      />
      {/* 关于 */}

      <Tabbar.Item
        key={3}
        icon={<Personal isActive={router.path.includes("/pages/about")} />}
      />
    </Tabbar>
  );
};

export default FooterBar;
