import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Pressable, Text } from "react-native";
import { colors, fonts, spacing } from "../utils";

const SubmitButton = ({ disabled, text }) => {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.btn,
        {
          backgroundColor: disabled
            ? colors.inActive
            : pressed
            ? colors.secondary
            : colors.tertiary,
        },
      ]}
    >
      <Text
        style={[
          styles.btnText,
          { color: disabled ? colors.grey : colors.white },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: spacing.x5,
    paddingVertical: spacing.x3,
    borderRadius: spacing.x2,
    marginTop: spacing.x5,
  },
  btnText: {
    fontSize: 16,
    fontFamily: fonts.primaryBold,
    letterSpacing: 0.5,
    textAlign: "center",
  },
});

export default SubmitButton;
