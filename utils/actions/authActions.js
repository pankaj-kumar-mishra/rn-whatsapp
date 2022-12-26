import {
  fbCollections,
  getFirebaseApp,
  getFirebaseErrorMsg,
} from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { child, getDatabase, ref, set } from "firebase/database";
import { authenticate } from "../../store/slices";
import { saveAuthDataToStorage } from "../storage";
import { getUserData } from "./userActions";

const createUser = async ({ firstName, lastName, email, userId }) => {
  const fullName = `${firstName} ${lastName}`.toLowerCase();
  const userData = {
    firstName,
    lastName,
    fullName,
    email,
    userId,
    createdAt: new Date().toISOString(),
  };
  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `${fbCollections.USERS}/${userId}`);

  await set(childRef, userData);
  return userData;
};

export const signUp = ({ firstName, lastName, email, password }) => {
  return async dispatch => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      // console.log(">>>>", result);
      const {
        uid: userId,
        stsTokenManager: { accessToken: token, expirationTime },
      } = result.user;
      const userData = await createUser({
        firstName,
        lastName,
        email,
        userId,
      });
      const expiryDate = new Date(expirationTime);
      dispatch(authenticate({ token, userData }));
      saveAuthDataToStorage({ token, expiryDate, userId });
    } catch (error) {
      const message = getFirebaseErrorMsg(error.code);
      throw new Error(message);
    }
  };
};

export const signIn = ({ email, password }) => {
  return async dispatch => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      const {
        uid: userId,
        stsTokenManager: { accessToken: token, expirationTime },
      } = result.user;
      const userData = await getUserData(userId);
      const expiryDate = new Date(expirationTime);
      dispatch(authenticate({ token, userData }));
      saveAuthDataToStorage({ token, expiryDate, userId });
    } catch (error) {
      const message = getFirebaseErrorMsg(error.code);
      throw new Error(message);
    }
  };
};
