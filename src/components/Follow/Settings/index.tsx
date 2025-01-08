import { Popup } from "@nutui/nutui-react-taro";
import { Text, View } from "@tarojs/components";
import { useSettings } from "../hooks/useSettings";

const Settings = () => {
  const [isOpen, setOpen] = useSettings();
  return (
    <Popup visible={isOpen} onClose={() => setOpen(false)}>
      <View className="p-8">
        <Text className="text-xl text-white font-semibold">设置</Text>
      </View>
    </Popup>
  );
};

export default Settings;
