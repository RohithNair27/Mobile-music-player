import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const SongContainer = ({ songInfo, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress(songInfo)}>
      <Image
        source={{
          uri: songInfo.artwork,
        }}
        style={styles.Image}
      />
      <View style={styles.songInformationContainer}>
        <Text style={styles.songNameText}>{songInfo.title}</Text>
        <Text style={styles.singerNameText}>{songInfo.artist}</Text>
      </View>
      <SimpleLineIcons name="options-vertical" size={18} color="white" />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  songInformationContainer: {
    width: "70%",
    justifyContent: "space-around",
  },
  songNameText: {
    color: "white",
  },
  singerNameText: {
    color: "white",
  },
});
export default SongContainer;
