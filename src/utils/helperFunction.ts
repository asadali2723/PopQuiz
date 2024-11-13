import {ConstNumber, popUpType} from '@constants';
import {showMessage} from 'react-native-flash-message';
import {heightPixel} from './responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const errorMessage = (error: any) => {
  return (
    error.response?.data?.status_message ||
    error.response?.data?.error ||
    error.message
  );
};
export const ToastHandler = (
  message: any,
  isSuccess: boolean,
  description?: string,
): void => {
  const messageText =
    typeof message === 'string' ? message : JSON.stringify(message);
  return showMessage({
    message: messageText,
    description,
    style: {
      height: heightPixel(ConstNumber.VALUE_48),
      bottom: heightPixel(ConstNumber.VALUE_20),
    },
    duration: ConstNumber.VALUE_3000,
    type: isSuccess ? popUpType.success : popUpType.danger,
  });
};
export const storeDataLocally = async (key: string, value: any) =>
  AsyncStorage.setItem(key, JSON.stringify(value));

export const getDataLocally = async (key: string) => {
  const data: any = await AsyncStorage.getItem(key);
  return JSON.parse(data);
};
export const removeLocalData = (key: string) => {
  AsyncStorage.removeItem(key);
};
