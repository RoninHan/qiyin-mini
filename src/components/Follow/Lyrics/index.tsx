import { Text, View } from "@tarojs/components";
import { ReactNode, useEffect, useMemo, useState } from "react";

import { Lrc, useRecoverAutoScrollImmediately } from "react-lrc";

import { testlrc } from "utils/utils";
import { Mark } from "../Mark";
import Taro from "@tarojs/taro";
import useTimer from "./use_timer";



const generateContent = (text: string) => {
  let arr: ReactNode[] = [];
  const splitText = text.split(/([#].{2}|[_].{1})/g);
  // console.log(splitText)
  for (let i = 0; i < splitText.length; i++) {
    const textType = splitText[i].charAt(1);
    
    // #C 为无歌词标记
    if (splitText[i].startsWith("_")) {
      arr.push(<Mark key={i} type={textType} isActive />);
    } else if (splitText[i].startsWith("#")) {
      // $C 为有歌词标记
      // 如$C抱，那么抱就会被标记为C
      const textTypeNumber = splitText[i].charAt(1);
      const word = splitText[i].charAt(2);
      // console.log(word)
      arr.push(
        <Mark key={i} type={textTypeNumber}>
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
      className="text-xl flex flex-row tracking-[0.2em] flex-wrap leading-[55px] items-center justify-center"
    >
      {content}
    </View>
  );
};

interface LyricsProps {
  lrc: string;
}

const parseLrc = (lrc: string) => {
  const lines = lrc.split("\n");
  const parsedLines = lines.map((line) => {
    const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
    if (match) {
      const minutes = parseInt(match[1], 10);
      const seconds = parseFloat(match[2]);
      const time = minutes * 60 + seconds;
      const text = match[3];
      return { time, text };
    }
    return null;
  }).filter(line => line !== null);
  return parsedLines;
};

const Lyrics = (props: LyricsProps) => {
  const { lrc } = props;
  const {
    currentMillisecond,
    setCurrentMillisecond,
    reset,
    play,
    pause
  } = useTimer(4);

  const {
    signal,
  } = useRecoverAutoScrollImmediately();

  const parsedLrc = useMemo(() => parseLrc(lrc), [lrc]);

  const deviceId = Taro.getStorageSync("device_id");
  const send = (str: string) => {
    if (!deviceId) {
      //判断是否存在，不存在就提示
      console.error('error:require deviceid');
      return;
    }

    let hexString = stringToHex(str);

    let sendBuf = hexToBuffer(hexString);
    Taro.writeBLECharacteristicValue({
      // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
      deviceId,
      serviceId: "000000ff-0000-1000-8000-00805f9b34fb",
      characteristicId: "0000ff01-0000-1000-8000-00805f9b34fb",
      // 这里的value是ArrayBuffer类型
      value: sendBuf,
      success(res) {
        console.log('writeBLECharacteristicValue success', res.errMsg)
      }
    })
  }

  const hexToBuffer = (hex: string): ArrayBuffer => {
    const pairs = hex.match(/[\s\S]{1,2}/g) || [];
    const decimalArray = pairs.map(pair => parseInt(pair, 16));
    const arr = new Uint8Array(decimalArray.length);
    for (let i = 0; i < decimalArray.length; i++) {
      arr[i] = decimalArray[i];
    }
    return arr.buffer;
  }

  const ab2hex = (buffer: ArrayBuffer) => {
    let hexArr = Array.prototype.map.call(
      new Uint8Array(buffer),
      function (bit) {
        return ('00' + bit.toString(16)).slice(-2)
      }
    )
    return hexArr.join('');
  }

  const stringToHex = (str: string) => {
    return str.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
  }

  useEffect(() => {
    play();
  }, [play, pause]);

  useEffect(() => {
    Taro.onBLECharacteristicValueChange(function (res) {
      console.log(ab2hex(res.value))
      // 接收到就继续
      play();
    })
  }, []);

  useEffect(() => {
    const currentLine = parsedLrc.find(line => currentMillisecond >= line.time * 1000 && currentMillisecond < (line.time + 1) * 1000);
    if (currentLine) {
      const match = currentLine.text.match(/[_#](\d)/);
      console.log(currentLine.text)
      if (match) {
        // pause();
        // send(match[1]);
      }
    }
  }, [currentMillisecond, parsedLrc, pause]);

  const [num, setNum] = useState(0);

  useEffect(() => {
    let last = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      setNum((cm) => cm + (now - last) * 4);
      console.log("currentMillisecond", num);
      last = now;
  }, 97);
  return () => clearInterval(timer);
  }, [])  



  return (
    <Lrc
      lrc={lrc}
      className=" text-center h-[calc(100vh-286px)] mt-[30px] pt-[20px] lyrics-shadow "
      currentMillisecond={currentMillisecond}
      verticalSpace
      lineRenderer={({ active, line }) => (
        <MarkText line={line.content} active={active} />
      )}
      recoverAutoScrollSingal={true}
      recoverAutoScrollInterval={5000}
    />
  );
};

export default Lyrics;
