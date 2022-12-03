import React from "react";
import { Entypo } from "@expo/vector-icons";
import SubmitButton from "./SubmitButton";
import Input from "./Input";
import { validateInput } from "../utils";

const SingInForm = () => {
  const onInputChangeHandler = (id, value) => {
    console.log(validateInput(id, value));
  };

  return (
    <>
      <Input
        id="email"
        label="Email Address"
        IconPack={Entypo}
        icon="mail"
        onInputChange={onInputChangeHandler}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        id="password"
        label="Password"
        IconPack={Entypo}
        icon="lock"
        onInputChange={onInputChangeHandler}
        autoCapitalize="none"
        secureTextEntry
      />

      <SubmitButton text="Sign In" />
    </>
  );
};

export default SingInForm;
