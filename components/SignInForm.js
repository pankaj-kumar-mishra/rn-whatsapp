import React, { useCallback, useReducer, useState, useEffect } from "react";
import { Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import SubmitButton from "./SubmitButton";
import Input from "./Input";
import {
  signIn,
  validateInput,
  validationFormTypes,
  validationReducer,
} from "../utils";

const initialState = {
  inputValues: {
    email: "",
    password: "",
  },
  inputValidities: {
    email: false,
    password: false,
  },
  formIsValid: false,
};

const SingInForm = () => {
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(
    validationReducer,
    initialState,
  );

  const { inputValidities, formIsValid, inputValues } = formState;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      Alert.alert("Error Occurred!!!", error);
    }
  }, [error]);

  const onInputChangeHandler = useCallback(
    (id, value) => {
      const validationResult = validateInput(id, value);
      dispatchFormState({
        type: validationFormTypes.VALIDATION_RESULT,
        payload: {
          id,
          value,
          validationResult,
        },
      });
    },
    [dispatchFormState],
  );

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(signIn(inputValues));
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [inputValues]);

  return (
    <>
      <Input
        id="email"
        label="Email Address"
        IconPack={Entypo}
        icon="mail"
        onInputChange={onInputChangeHandler}
        error={inputValidities["email"]}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        id="password"
        label="Password"
        IconPack={Entypo}
        icon="lock"
        onInputChange={onInputChangeHandler}
        error={inputValidities["password"]}
        autoCapitalize="none"
        secureTextEntry
      />

      <SubmitButton
        text="Sign In"
        disabled={!formIsValid}
        onPress={handleSubmit}
        loading={loading}
      />
    </>
  );
};

export default SingInForm;
