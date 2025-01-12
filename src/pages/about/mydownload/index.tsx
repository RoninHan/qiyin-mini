import { Button, Cell } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import Navbar from "src/components/Navbar";

const Index = () => {
  return (
    <View className="bg-black min-h-screen w-full flex flex-col">
      {/* <Navbar title="我的下载" /> */}

      <View className="flex-1 flex flex-col px-4">
        <Cell.Group>
          {/* 原本这是我应该要做的，不过甲方要赶交付，幸苦接受的兄弟了。 */}
          <Cell title="歌曲1" extra={<Button>删除</Button>}></Cell>
          <Cell title="歌曲2" extra={<Button>删除</Button>}></Cell>
          <Cell title="歌曲3" extra={<Button>删除</Button>}></Cell>
          <Cell title="歌曲4" extra={<Button>删除</Button>}></Cell>
          <Cell title="歌曲5" extra={<Button>删除</Button>}></Cell>
          <Cell title="歌曲6" extra={<Button>删除</Button>}></Cell>
        </Cell.Group>
      </View>
    </View>
  );
};

export default Index;
