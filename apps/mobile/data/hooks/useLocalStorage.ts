import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

export const useLocalStorage = () => {
  const saveItem = useCallback(async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getItem = useCallback(async (key: string) => {
    const result = await AsyncStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  }, []);

  const deleteItem = useCallback(async (key: string) => {
    await AsyncStorage.removeItem(key);
  }, []);

  return { saveItem, getItem, deleteItem };
}
