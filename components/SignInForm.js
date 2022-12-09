import React, { useCallback, useReducer } from "react";
import { Entypo } from "@expo/vector-icons";
import SubmitButton from "./SubmitButton";
import Input from "./Input";
import {
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
  const [formState, dispatchFormState] = useReducer(
    validationReducer,
    initialState,
  );

  const { inputValidities, formIsValid, inputValues } = formState;

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
    console.log(inputValues);
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
      />
    </>
  );
};

export default SingInForm;
