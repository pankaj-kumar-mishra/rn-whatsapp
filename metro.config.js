const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  // Adds support for `.db` files for SQLite databases
  //   "db"
  //   Add support for firebase files
  "cjs",
);

module.exports = config;
