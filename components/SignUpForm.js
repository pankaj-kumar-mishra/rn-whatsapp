import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

const SignUpForm = () => {
  return (
    <>
      <Input label="First Name" IconPack={FontAwesome} icon="user" />
      <Input label="Last Name" IconPack={FontAwesome} icon="user" />
      <Input label="Email Address" IconPack={Entypo} icon="mail" />
      <Input label="Password" IconPack={Entypo} icon="lock" />

      <SubmitButton text="Sign Up" />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignUpForm;
