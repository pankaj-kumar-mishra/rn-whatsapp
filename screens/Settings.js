import React, { useCallback, useReducer, useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { Input, PageTitle, SubmitButton } from "../components";
import {
  colors,
  spacing,
  updateUser,
  validateInput,
  validationFormTypes,
  validationReducer,
} from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../store";

const Settings = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.userData);

  const initialInputValues = {
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    about: userData?.about || "",
  };
  const initialState = {
    inputValues: initialInputValues,
    inputValidities: {
      firstName: undefined,
      lastName: undefined,
      about: undefined,
    },
    formIsValid: userData ? true : false,
  };

  const [formState, dispatchFormState] = useReducer(
    validationReducer,
    initialState,
  );

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { inputValidities, formIsValid, inputValues } = formState;

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
    const newData = { ...inputValues, userId: userData.userId };
    try {
      setLoading(true);
      const newUserData = await updateUser(newData);
      dispatch(updateUserData({ userData: newUserData }));
      setError(null);
      Alert.alert("Success", "Saved Successfully");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [inputValues]);

  const hasChanges = useCallback(() => {
    return (
      inputValues.firstName !== initialInputValues.firstName ||
      inputValues.lastName !== initialInputValues.lastName ||
      inputValues.about !== initialInputValues.about
    );
  }, [inputValues]);

  return (
    <>
      <PageTitle text="Settings" />
      <View style={styles.container}>
        <Input
          id="firstName"
          label="First Name"
          IconPack={FontAwesome}
          icon="user"
          onInputChange={onInputChangeHandler}
          error={inputValidities["firstName"]}
          defaultValue={userData?.firstName}
        />
        <Input
          id="lastName"
          label="Last Name"
          IconPack={FontAwesome}
          icon="user"
          onInputChange={onInputChangeHandler}
          error={inputValidities["lastName"]}
          defaultValue={userData?.lastName}
        />
        <Input
          id="email"
          label="Email Address"
          IconPack={Entypo}
          icon="mail"
          keyboardType="email-address"
          defaultValue={userData?.email}
          editable={false}
        />
        <Input
          id="about"
          label="About"
          IconPack={FontAwesome}
          icon="sticky-note"
          onInputChange={onInputChangeHandler}
          error={inputValidities["about"]}
          defaultValue={userData?.about}
        />

        <SubmitButton
          text="Save"
          disabled={!formIsValid || !hasChanges()}
          onPress={handleSubmit}
          loading={loading}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.x5,
    backgroundColor: colors.white,
  },
});

export default Settings;
