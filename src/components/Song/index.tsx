import { View } from "@tarojs/components";
import FooterBar from "../FooterBar";
// import Navbar from "../Navbar";
import Category from "./Category";

import List from "./List";
import { get } from "utils/http";
import { useEffect, useState } from "react";

const Song = () => {
  const [songList, setSongList] = useState<any[]>([]);
  const [songTypes, setSongTypes] = useState<any[]>([]);

  const getSongType = async () => {
    // 获取歌曲分类
    let res = await get("/api/song/type");
    setSongTypes(res.data);
  }

  const getSong = async () => {
    // 获取歌曲
    let res = await get("/api/song");
    setSongList(res.data);
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
        <Category typeList={songTypes} onTypeChange={function (type: string): void {
          throw new Error("Function not implemented.");
        } }  />
        {/* 歌曲List */}
        <List />
      </View>
      <FooterBar />
    </View>
  );
};

export default Song;
