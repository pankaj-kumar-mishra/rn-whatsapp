import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Pressable, Text, ActivityIndicator } from "react-native";
import { colors, fonts, spacing } from "../utils";

const SubmitButton = ({ disabled, text, onPress, loading }) => {
  return (
    <Pressable
      disabled={disabled || loading}
      onPress={onPress}
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
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text
          style={[
            styles.btnText,
            { color: disabled ? colors.grey : colors.white },
          ]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  loading: PropTypes.bool,
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
