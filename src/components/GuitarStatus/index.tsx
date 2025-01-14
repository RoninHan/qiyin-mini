import { Image, View } from "@tarojs/components";
import DeviceSelect from "../Follow/DeviceSelect";
import FooterBar from "../FooterBar";
// import Navbar from "../Navbar";

import guitar from "public/guitarshow.svg";

import { Provider } from "jotai";
import Category from "./Category";
import RateModal from "./RateModal";
import Stat from "./Stat";
import Style from "./Style";
import ToneModal from "./ToneModal";
import { useEffect, useState } from "react";
import Taro, { useDidShow } from "@tarojs/taro";

const GuitarStatus = () => {
  const [deviceId, setDeviceId] = useState("");
  const [deviceData, setDeviceData] = useState<any>([]);
  const getSetting = async () => {
    // 获取设置
    Taro.request({
      url: "https://www.axiarz.com/api/setting",
      method: "GET",
      success: (res) => {
        console.log(res);
        setDeviceId(res.data.data.device_id);
        Taro.setStorageSync("device_id", res.data.data.device_id);
      },
    });
  }
  useEffect(() => {
    getSetting()
  }, []);

  useDidShow(() => {
    Taro.onBluetoothDeviceFound((res) => {
      res.devices.forEach((device) => {
        // 这里可以做一些过滤
        console.log('Device Found', device)
        if (device.name === "") {
          return;
        }
        let devs = deviceData;
        devs.push({
          deviceId: device.deviceId,
          name: device.name,
        });
        setDeviceData(devs);
      })
      // 找到要搜索的设备后，及时停止扫描
      Taro.stopBluetoothDevicesDiscovery()
    })

    Taro.openBluetoothAdapter({
      mode: 'central'
    });

    Taro.onBLECharacteristicValueChange((res) => {
      console.log('onBLECharacteristicValueChange', res)
    })
  });

  const lineDevice = (deviceId: string) => {
    setDeviceId(deviceId);
    // 这里添加你的设备连接逻辑
    bleGattLink(deviceId);
  }

  const bleGattLink = (deviceId: string) => {
    Taro.createBLEConnection({
      deviceId, // 搜索到设备的 deviceId
      success: () => {
        // 模拟设备链接成功
        console.log('createBLEConnection success');
        setDeviceId(deviceId);
        // 连接成功，获取服务
        Taro.notifyBLECharacteristicValueChange({
          state: true,
          deviceId,
          serviceId: "000000ff-0000-1000-8000-00805f9b34fb",
          characteristicId: "0000ff01-0000-1000-8000-00805f9b34fb",
          success(res) {
            console.log('notifyBLECharacteristicValueChange success', res.errMsg)
          }
        });
      }
    })
  }


  return (
    <Provider>
      {/* 音调弹出 */}
      <ToneModal />
      {/* 速率弹出 */}
      <RateModal />
      <View className="bg-black min-h-screen w-full flex flex-col">
        {/* <Navbar title="吉他状态" /> */}
        <View className="flex-1 flex flex-col gap-y-[12px] px-[15px] my-[14px]">
          <DeviceSelect />
          <View className="flex flex-row gap-x-[12px] relative ">
            {/* 吉他状态 */}
            <Category />
            {/* 吉他图 */}
            <Image src={guitar} className="w-[168px] h-[279px] mb-2" />
            {/* 吉他电量/音量 */}
            <Stat />
          </View>
          {/* 吉他样式/灯光 */}
          <Style />
        </View>

        <FooterBar />
      </View>
    </Provider>
  );
};

export default GuitarStatus;
