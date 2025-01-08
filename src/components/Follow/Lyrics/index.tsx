import { Text, View } from "@tarojs/components";
import { ReactNode, useMemo } from "react";

import { Lrc } from "react-lrc";

import { testlrc } from "utils/utils";
import { Mark } from "../Mark";

const generateContent = (text: string) => {
  let arr: ReactNode[] = [];
  const splitText = text.split(/([#].|[$].{2})/g);

  for (let i = 0; i < splitText.length; i++) {
    const textType = splitText[i].charAt(1);

    // #C 为无歌词标记
    if (splitText[i].startsWith("#")) {
      arr.push(<Mark key={i} type={textType} isActive />);
    } else if (splitText[i].startsWith("$")) {
      // $C 为有歌词标记
      // 如$C抱，那么抱就会被标记为C
      const textType = splitText[i].charAt(1);
      const word = splitText[i].charAt(2);
      arr.push(
        <Mark key={i} type={textType}>
          {word}
        </Mark>
      );
    } else {
      // 什么都没有，正常显示
      arr.push(<Text key={i}>{splitText[i]}</Text>);
    }
  }

  return arr;
};

// 歌词
const MarkText = ({ line, active }: { line: string; active: boolean }) => {
  const content = useMemo(() => generateContent(line), [line]);
  return (
    <View
      style={{
        color: active ? "#fff" : "rgba(255,255,255,.2)",
      }}
      className="text-xl flex flex-row tracking-[0.5em] flex-wrap leading-[55px] items-center justify-center"
    >
      {content}
    </View>
  );
};

const Lyrics = () => {
  return (
    <Lrc
      lrc={testlrc}
      className=" text-center h-[calc(100vh-286px)] mt-[30px] lyrics-shadow "
      currentMillisecond={0}
      lineRenderer={({ active, line }) => (
        <MarkText line={line.content} active={active} />
      )}
    />
  );
};

export default Lyrics;
