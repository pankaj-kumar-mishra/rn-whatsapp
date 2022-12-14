import { getFirebaseApp, getFirebaseErrorMsg } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = async ({ firstName, lastName, email, password }) => {
  const app = getFirebaseApp();
  const auth = getAuth(app);

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
  } catch (error) {
    const message = getFirebaseErrorMsg(error.code);
    throw new Error(message);
  }
};
