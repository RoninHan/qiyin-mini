import Taro, { useRouter } from "@tarojs/taro";
import { useEffect } from "react";
import Follow from "src/components/Follow";

function Index() {
  const router = useRouter()
  const { id } = router.params

  useEffect(() => {
    console.log(router)
  }, [])

  return <Follow id={id ? Number(id) : 0} />;
}

export default Index;
