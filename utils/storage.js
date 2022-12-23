import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageKeys = {
  USER_TOKEN: "userToken",
};

export const saveDataToStorage = async ({ token, expiryDate, userId }) => {
  await AsyncStorage.setItem(
    storageKeys.USER_TOKEN,
    JSON.stringify({
      userId,
      token,
      expiryDate: expiryDate.toISOString(),
    }),
  );
};
