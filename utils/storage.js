import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageKeys = {
  USER_TOKEN: "userToken",
};

export const saveAuthDataToStorage = async ({ token, expiryDate, userId }) => {
  await AsyncStorage.setItem(
    storageKeys.USER_TOKEN,
    JSON.stringify({
      userId,
      token,
      expiryDate: expiryDate.toISOString(),
    }),
  );
};

export const getAuthDataFromStorage = async () => {
  const data = await AsyncStorage.getItem(storageKeys.USER_TOKEN);
  return data ? JSON.parse(data) : null;
};

export const clearAuthDataFromStorage = async () => {
  await AsyncStorage.removeItem(storageKeys.USER_TOKEN);
};
