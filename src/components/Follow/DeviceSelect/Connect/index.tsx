import { Popup } from "@nutui/nutui-react-taro";
import { useAtom } from "jotai";
import deviceSelectOpenAtom from "../../hooks/useDeviceSelect";

const Connect = () => {
  const [open, setOpen] = useAtom(deviceSelectOpenAtom);
  return <Popup visible={open} onClose={() => setOpen(false)}></Popup>;
};
