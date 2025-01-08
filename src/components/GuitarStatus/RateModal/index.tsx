import { Picker, PickerOption } from "@nutui/nutui-react-taro";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { rateModalAtom } from "../hooks/usePicker";

const RateModal = () => {
  const [visible, setVisible] = useAtom(rateModalAtom);

  const selectValue = useMemo(
    () =>
      new Array(100).fill(1).map(
        (_, idx) =>
          ({
            value: idx + 1,
            text: idx + 1 + "",
          } as PickerOption)
      ),
    []
  );

  return (
    <Picker
      title="请选择速率"
      visible={visible}
      className="!p-0 !m-0"
      options={[selectValue]}
      onConfirm={(list, values) => {}}
      onClose={() => setVisible(false)}
    />
  );
};

export default RateModal;
