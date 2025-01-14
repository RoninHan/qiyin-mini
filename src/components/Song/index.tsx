import { View } from "@tarojs/components";
import FooterBar from "../FooterBar";
// import Navbar from "../Navbar";
import Category from "./Category";

import List from "./List";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

const Song = () => {
  const [songList, setSongList] = useState<any[]>([]);
  const [songTypes, setSongTypes] = useState<any[]>([]);

  const getSongType = async () => {
    Taro.request({
      url: "https://www.axiarz.com/api/song_type",
      method: "GET",
      success: (res) => {
        setSongTypes(res.data.data);
      },
    });
  }

  const getSong = async () => {
    Taro.request({
      url: "https://www.axiarz.com/api/song",
      method: "GET",
      success: (res) => {
        setSongList(res.data.data);
      },
    });
  }

  useEffect(() => {
    getSong()
    getSongType()
  }, []);


  return (
    <View className="bg-black overflow-hidden h-screen w-full flex flex-col">
      {/* <Navbar title="歌曲" /> */}
      <View className="flex-1 flex flex-col gap-y-[12px]">
        {/* 歌曲分类 */}
        <Category typeList={songTypes} onTypeChange={function (id: string): void {
          throw new Error("Function not implemented.");
        }} />
        {/* 歌曲List */}
        <List />
      </View>
      <FooterBar />
    </View>
  );
};

export default Song;
