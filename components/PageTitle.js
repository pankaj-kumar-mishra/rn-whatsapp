import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts, spacing } from "../utils";

const PageTitle = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: spacing.x10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 24,
    color: colors.primary,
    fontFamily: fonts.tertiaryRegular,
    letterSpacing: 0.3,
  },
});

export default PageTitle;
