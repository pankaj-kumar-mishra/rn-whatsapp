import React, { useCallback, useReducer, useState, useEffect } from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import SubmitButton from "./SubmitButton";
import Input from "./Input";
import {
  signUp,
  validateInput,
  validationFormTypes,
  validationReducer,
} from "../utils";

const initialState = {
  inputValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
};

const SignUpForm = () => {
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

  const handleSubmit = useCallback(() => {
    try {
      setLoading(true);
      dispatch(signUp(inputValues));
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
        id="firstName"
        label="First Name"
        IconPack={FontAwesome}
        icon="user"
        onInputChange={onInputChangeHandler}
        error={inputValidities["firstName"]}
      />
      <Input
        id="lastName"
        label="Last Name"
        IconPack={FontAwesome}
        icon="user"
        onInputChange={onInputChangeHandler}
        error={inputValidities["lastName"]}
      />
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
        text="Sign Up"
        disabled={!formIsValid}
        onPress={handleSubmit}
        loading={loading}
      />
    </>
  );
};

export default SignUpForm;
