import { Progress } from "@nutui/nutui-react-taro";
import { Text, View } from "@tarojs/components";
import Taro, { useReady } from "@tarojs/taro";
import { useRafState } from "ahooks";
import { CSSProperties, useCallback, useMemo, useRef } from "react";

import "./index.less";

// timeline为整首歌的时间，percentage为当前滚动条百分比位置
const percentageTimeline = (timeline: string, percentage: number) => {
  const parsed = timeline.split(":");
  if (parsed.length > 3 || parsed.length < 2) return timeline;

  let interval = 0;

  if (parsed.length === 3) {
    interval += Number(parsed[0]) * 3600;
    interval += Number(parsed[1]) * 60;
    interval += Number(parsed[2]);
  } else {
    interval += Number(parsed[0]) * 60;
    interval += Number(parsed[1]);
  }

  interval *= percentage / 100;

  const minutes = Math.floor(interval / 60);
  const seconds = Math.floor(interval % 60);

  return `${minutes}:${seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;
};

const ProgressBar = () => {
  const currentWidth = useRef(0);

  const [progress, setProgress] = useRafState(0);

  const onDrag = useCallback((e: any) => {
    const radio = (e.touches[0].clientX / currentWidth.current) * 100;
    // nutui 没有居然没有限制最小最大百分比，因此控制一下，最小0%，最大100%
    setProgress(Math.max(Math.min(radio, 100), 0));
  }, []);

  // 如何使用计时器呢，如下
  // 当然最好还是用别人的播放器组件
  // let timer = setInterval(() => {
  //    setProgress(p => {
  //     if (p >= 100) {
  //       clearInterval(timer)
  //       return 100
  //     }
  //     return p + 1
  //    })
  //  }, 1000)

  useReady(() => {
    Taro.createSelectorQuery()
      .select("#lyrics-progress")
      .boundingClientRect()
      .exec((res) => {
        currentWidth.current = res[0].width;
      });
  });

  const timeline = useMemo(
    () => percentageTimeline("2:47", progress),
    [progress]
  );

  return (
    <>
      {/* 歌曲进度条，由于Range组件会有点问题，因此手写一个拖拽 */}
      <Progress
        id="lyrics-progress"
        style={
          {
            "--nutui-progress-background": "#fff",
            "--nutui-progress-color": "#FFBD5A",
            "--nutui-progress-text-border-radius": 0,
            "--nutui-progress-border-radius": 0,
          } as CSSProperties
        }
        percent={progress}
        strokeWidth="5"
        showText
        delay={0}
        animated={false}
      >
        <View
          onTouchMove={onDrag}
          className="w-[10px] h-[10px] bg-[#FFBD5A] rounded-full absolute -left-[2px]"
        />
      </Progress>

      <View className="w-full justify-between flex text-xs font-bold text-[#8A9A9D] mt-1 ">
        <Text>{timeline}</Text>
        <Text>2:47</Text>
      </View>
    </>
  );
};

export default ProgressBar;
