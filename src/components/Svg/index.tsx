import { Image, ImageProps } from "@tarojs/components";
import { encode as btoa } from "base-64";
import { memo } from "react";
import { renderToString } from "react-dom/server";

// 微信小程序不允许使用svg，但设计稿很多svg怎么办呢？
// 通过image标签使用svg
const Svg = ({ children, ...props }: Omit<ImageProps, "src">) => {
  let htmlString = renderToString(children) as string;

  // 如果没有xmlns，自动加一个
  if (htmlString && !htmlString.includes("xmlns")) {
    htmlString = htmlString.replace(
      /viewBox="(.*?)"/g,
      (match) => `${match} xmlns="http://www.w3.org/2000/svg" `
    );
  }
  return (
    htmlString && (
      <Image {...props} src={`data:image/svg+xml;base64,${btoa(htmlString)}`} />
    )
  );
};

export default memo(Svg);
