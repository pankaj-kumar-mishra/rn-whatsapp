import { child, get, getDatabase, ref, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import {
  fbCollections,
  getFirebaseApp,
  getFirebaseErrorMsg,
} from "../firebase";

export const refreshJwtToken = async () => {
  try {
    const app = getFirebaseApp();
    const auth = getAuth(app);
    const jwt = await auth.currentUser.getIdToken(true);
    console.log(jwt);
    // we will use jwt-decode (if required)
  } catch (error) {
    console.log(error);
  }
};

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

export const updateUser = async ({ firstName, lastName, about, userId }) => {
  const fullName = `${firstName} ${lastName}`.toLowerCase();
  const userData = {
    firstName,
    lastName,
    fullName,
    userId,
    about,
    updatedAt: new Date().toISOString(),
  };
  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `${fbCollections.USERS}/${userId}`);

  await update(childRef, userData);
  return userData;
};
