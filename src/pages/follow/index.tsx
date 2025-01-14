import Taro from "@tarojs/taro";
import Follow from "src/components/Follow";

function Index() {
  const router = Taro.getCurrentInstance().router;
  const { id } = router ? router.params : {};
  return <Follow />;
}

export default Index;
