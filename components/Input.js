import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { colors, fonts, spacing } from "../utils";

const Input = ({
  label,
  error,
  IconPack,
  icon,
  iconSize,
  id,
  onInputChange,
  ...rest
}) => {
  const onChangeTextHandler = text => {
    if (!onInputChange) {
      return;
    }
    onInputChange(id, text);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon && IconPack ? (
          <IconPack name={icon} size={iconSize || 18} style={styles.icon} />
        ) : null}
        <TextInput
          style={styles.input}
          autoCorrect={false}
          {...rest}
          onChangeText={onChangeTextHandler}
        />
      </View>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  IconPack: PropTypes.elementType,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  id: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 8,
    fontFamily: fonts.SecondaryRegular,
    letterSpacing: 1,
    fontSize: 18,
    color: colors.text,
  },
  inputContainer: {
    paddingHorizontal: spacing.x4,
    paddingVertical: spacing.x3,
    borderRadius: spacing.x1,
    backgroundColor: colors.closeWhite,
    borderWidth: 0.3,
    borderColor: colors.grey,
    flexDirection: "row",
  },
  icon: {
    color: colors.grey,
    marginRight: spacing.x2,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontFamily: fonts.primaryRegular,
    letterSpacing: 0.3,
    // paddingTop: 0,
  },
  errorContainer: {
    marginTop: spacing.x1,
  },
  error: {
    fontSize: 12,
    color: colors.danger,
  },
});

export default Input;
