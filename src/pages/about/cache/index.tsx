import { Button, Cell } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import Navbar from "src/components/Navbar";

const Index = () => {
  return (
    <View className="bg-black min-h-screen w-full flex flex-col">
      {/* <Navbar title="清理缓存" /> */}

      <View className="flex-1 flex flex-col px-4">
        <Cell.Group>
          <Cell title="设备缓存" extra={<Button>清理</Button>}></Cell>
          <Cell title="歌词缓存" extra={<Button>清理</Button>}></Cell>
        </Cell.Group>
      </View>
    </View>
  );
};

export default Index;
