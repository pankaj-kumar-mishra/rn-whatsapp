import { child, get, getDatabase, ref } from "firebase/database";
import {
  fbCollections,
  getFirebaseApp,
  getFirebaseErrorMsg,
} from "../firebase";

export const getUserData = async userId => {
  try {
    const app = getFirebaseApp();
    const dbRef = ref(getDatabase(app));
    const userRef = child(dbRef, `${fbCollections.USERS}/${userId}`);
    const snapshot = await get(userRef);
    return snapshot.val();
  } catch (error) {
    const message = getFirebaseErrorMsg(error.code);
    throw new Error(message);
  }
};
