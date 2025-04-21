import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const SearchBar = ({ onChange }) => {
  return (
    <View style={styles.searchBarContainer}>
      <AntDesign name="search1" size={22} color="white" />
      <TextInput
        style={styles.textInput}
        placeholder="Find in Liked Songs"
        placeholderTextColor="white"
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "78%",
    borderRadius: 5,
    paddingLeft: 7,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  textInput: {
    flex: 1,
    color: "white",
    marginLeft: 8,
  },
});

export default SearchBar;
