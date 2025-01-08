import { Picker } from "@nutui/nutui-react-taro";
import { useAtom } from "jotai";
import { toneModalAtom } from "../hooks/usePicker";

const ToneModal = () => {
  const [visible, setVisible] = useAtom(toneModalAtom);

  return (
    <Picker
      title="请选择音调"
      visible={visible}
      className="!p-0 !m-0"
      options={[
        [
          {
            value: "Am",
            text: "Am",
          },
          {
            value: "Dm",
            text: "Dm",
          },
          {
            value: "Em",
            text: "Em",
          },
          {
            value: "F",
            text: "F",
          },
          {
            value: "G",
            text: "G",
          },
          {
            value: "Bm",
            text: "Bm",
          },
        ],
      ]}
      onConfirm={(list, values) => {}}
      onClose={() => setVisible(false)}
    />
  );
};

export default ToneModal;
