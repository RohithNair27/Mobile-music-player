import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Entypo from "@expo/vector-icons/Entypo";
const SongContainer = ({ songInfo, onPress, index }) => {
  return (
    <>
      {songInfo.mp4_link ? (
        <Pressable
          style={styles.container}
          onPress={() => onPress(songInfo, index)}
        >
          <Image
            source={{
              uri: songInfo.artwork,
            }}
            style={styles.Image}
          />
          <View style={styles.songInformationContainer}>
            <Text style={styles.songNameText}>{songInfo.title}</Text>
            <Text
              style={styles.singerNameText}
              ellipsizeMode={"tail"}
              numberOfLines={1}
            >
              {songInfo.artist}
            </Text>
          </View>
          <SimpleLineIcons name="options-vertical" size={18} color="white" />
        </Pressable>
      ) : (
        <Pressable
          style={{ ...styles.container, justifyContent: "flex-start" }}
        >
          <View
            style={{
              ...styles.Image,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              backgroundColor: "#808080",
              marginRight: 10,
            }}
          >
            <Entypo name="plus" size={30} color="#d3d3d3" />
          </View>
          <Text style={styles.songNameText}>{songInfo.title}</Text>
        </Pressable>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    // display: "flex",
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
    fontSize: 15,

    color: "white",
  },
  singerNameText: {
    fontSize: 13,
    color: "#d3d3d3",
  },
});
export default SongContainer;
