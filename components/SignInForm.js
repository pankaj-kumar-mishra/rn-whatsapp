import React from "react";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

const SingInForm = () => {
  return (
    <>
      <Input label="Email Address" IconPack={Entypo} icon="mail" />
      <Input label="Password" IconPack={Entypo} icon="lock" />

      <SubmitButton text="Sign In" />
    </>
  );
};

const styles = StyleSheet.create({});

export default SingInForm;
