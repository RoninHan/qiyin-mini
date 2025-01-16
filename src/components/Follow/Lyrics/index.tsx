import { Text, View } from "@tarojs/components";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { Lrc } from "react-lrc";
import { Mark } from "../Mark";
import Taro, { useDidShow, useReady, useRouter } from "@tarojs/taro";

const generateContent = (text: string) => {
  let arr: ReactNode[] = [];
  const splitText = text.split(/([#].{2}|[_].{1})/g);
  for (let i = 0; i < splitText.length; i++) {
    const textType = splitText[i].charAt(1);
    if (splitText[i].startsWith("_")) {
      arr.push(<Mark key={i} type={textType} isActive />);
    } else if (splitText[i].startsWith("#")) {
      const textTypeNumber = splitText[i].charAt(1);
      const word = splitText[i].charAt(2);
      arr.push(
        <Mark key={i} type={textTypeNumber}>
          {word}
        </Mark>
      );
    } else {
      arr.push(<Text key={i}>{splitText[i]}</Text>);
    }
  }
  return arr;
};

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



const Lyrics = () => {
  const router = useRouter();
  const { id } = router.params;
  const [lrc, setLrc] = useState("");
  const [paused, setPaused] = useState(false);
  const play = useCallback(() => setPaused(false), []);
  const pause = useCallback(() => setPaused(true), []);
  const [currentMillisecond, setCurrentMillisecond] = useState(0);
  const [num, setNum] = useState(Date.now());

  const getLyric = async () => {
    let res = await Taro.request({
      url: "https://www.axiarz.com/api/lyrics/find_lyrics_by_song_id/" + id,
      method: "GET",
    });
    setLrc(res.data.data.lyric);
  };

  useReady(async () => {
    await getLyric();
  });

  const parseLrc = (lrc: string) => {
    const lines = lrc.split("\n");
    const parsedLines = lines
      .map((line) => {
        const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
        if (match) {
          const minutes = parseInt(match[1], 10);
          const seconds = parseFloat(match[2]);
          const time = minutes * 60 + seconds;
          const text = match[3];
          return { time, text };
        }
        return null;
      })
      .filter((line) => line !== null);
    return parsedLines;
  };

  const parsedLrc = useMemo(() => parseLrc(lrc), [lrc]);

  const deviceId = Taro.getStorageSync("device_id");
  const send = (str: string) => {
    if (!deviceId) {
      console.error("error:require deviceid");
      return;
    }

    let hexString = stringToHex(str);
    let sendBuf = hexToBuffer(hexString);
    Taro.writeBLECharacteristicValue({
      deviceId,
      serviceId: "000000ff-0000-1000-8000-00805f9b34fb",
      characteristicId: "0000ff01-0000-1000-8000-00805f9b34fb",
      value: sendBuf,
      success(res) {
        console.log("writeBLECharacteristicValue success", res.errMsg);
      },
    });
  };

  const hexToBuffer = (hex: string): ArrayBuffer => {
    const pairs = hex.match(/[\s\S]{1,2}/g) || [];
    const decimalArray = pairs.map((pair) => parseInt(pair, 16));
    const arr = new Uint8Array(decimalArray.length);
    for (let i = 0; i < decimalArray.length; i++) {
      arr[i] = decimalArray[i];
    }
    return arr.buffer;
  };

  const ab2hex = (buffer: ArrayBuffer) => {
    let hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {
      return ("00" + bit.toString(16)).slice(-2);
    });
    return hexArr.join("");
  };

  const stringToHex = (str: string) => {
    return str
      .split("")
      .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("");
  };

  const updateTimer = () => {
    const now = Date.now();
    setCurrentMillisecond((cm) => {
      console.log("cm", cm);
      return cm + (now - num) * 4;
    });

    console.log("currentMillisecond", currentMillisecond);
  };

  useEffect(() => {
    console.log("useEffect");
    const timer = setInterval(updateTimer, 97);

    const currentLine = parsedLrc.find(
      (line) =>
        currentMillisecond >= line.time * 1000 &&
        currentMillisecond < (line.time + 1) * 1000
    );
    if (currentLine) {
      const match = currentLine.text.match(/[_#](\d)/);
      if (match) {
        pause();
      }
    }

    return () => {
      console.log("clearInterval");
      clearInterval(timer);
    };
  }, [currentMillisecond, parsedLrc, paused]);


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