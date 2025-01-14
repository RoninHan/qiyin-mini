import { Text, View } from "@tarojs/components";
import { ReactNode, useMemo } from "react";

import { Lrc } from "react-lrc";

import { testlrc } from "utils/utils";
import { Mark } from "../Mark";
import Taro from "@tarojs/taro";



const generateContent = (text: string) => {
  let arr: ReactNode[] = [];
  const splitText = text.split(/([#].|[_].{2})/g);

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
  const deviceId = Taro.getStorageSync("device_id");
  const send = () => {
    if (!deviceId) {
      //判断是否存在，不存在就提示
      console.error('error:require deviceid');
      return;
    }

    let hexString = '';

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
