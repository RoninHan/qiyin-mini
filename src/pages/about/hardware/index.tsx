import { Button, Cell } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import Navbar from "src/components/Navbar";

const Index = () => {
  return (
    <View className="bg-black min-h-screen w-full flex flex-col">
      {/* <Navbar title="硬件更新" /> */}

      <View className="flex-1 flex flex-col px-4">
        <Cell.Group>
          <Cell
            title="硬件版本号"
            description="v1.1.4"
            extra={<Button>更新</Button>}
          ></Cell>
          <Cell title="设备信息"></Cell>
        </Cell.Group>
      </View>
    </View>
  );
};

export default Index;
