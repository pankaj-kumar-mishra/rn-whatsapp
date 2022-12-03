import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import SubmitButton from "./SubmitButton";
import Input from "./Input";
import { validateInput } from "../utils";

const SignUpForm = () => {
  const onInputChangeHandler = (id, value) => {
    console.log(validateInput(id, value));
  };

  return (
    <>
      <Input
        id="firstName"
        label="First Name"
        IconPack={FontAwesome}
        icon="user"
        onInputChange={onInputChangeHandler}
      />
      <Input
        id="lastName"
        label="Last Name"
        IconPack={FontAwesome}
        icon="user"
        onInputChange={onInputChangeHandler}
      />
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

      <SubmitButton text="Sign Up" />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignUpForm;
