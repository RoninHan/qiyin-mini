import { Image, View, ViewProps } from "@tarojs/components";

import settings from "public/about/settings.svg";
import share from "public/about/share.svg";

import Taro from "@tarojs/taro";
import clearcache from "public/about/clearcache.svg";
import rightarrow from "public/about/Navigation/Draw/ic_arrow_right备份 8.svg";
import paste from "public/about/paste.svg";

// 个人页面单独的链接
const Link = ({ children, icon, ...props }: { icon: string } & ViewProps) => {
  return (
    <View {...props} className="flex flex-row justify-between items-center">
      <View className="flex flex-row gap-x-[10px] text-white items-center leading-8">
        <Image src={icon} className="w-5 h-5" />
        {children}
      </View>
      <Image src={rightarrow} className="w-[19px] h-[19px]" />
    </View>
  );
};

// 个人页面单独的链接
const Links = () => {
  return (
    <View className="flex flex-col w-full px-[40px] gap-y-4 mt-11">
      <Link
        onClick={() =>
          Taro.navigateTo({
            url: "mydownload/index",
          })
        }
        icon={settings}
      >
        我的下载
      </Link>
      <Link
        onClick={() =>
          Taro.navigateTo({
            url: "hardware/index",
          })
        }
        icon={share}
      >
        硬件更新
      </Link>
      <Link
        onClick={() =>
          Taro.navigateTo({
            url: "cache/index",
          })
        }
        icon={clearcache}
      >
        清理缓存
      </Link>
      <Link
        onClick={() =>
          Taro.redirectTo({
            url: "mydownload/index",
          })
        }
        icon={paste}
      >
        使用教程
      </Link>
    </View>
  );
};

export default Links;
