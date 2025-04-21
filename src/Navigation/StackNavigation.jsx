import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React, { useContext } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LayoutContext } from "../context/uiContext/LayoutContext";
import { SongInformationContext } from "../context/songInformationContext/SongInformationContext";

import Ionicons from "@expo/vector-icons/Ionicons";

import AntDesign from "@expo/vector-icons/AntDesign";
import BottomTabNavigation from "./BottomNavigation";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const {
    showLikedSongsHeader,

    showTogglePauseScrollButton,
  } = useContext(LayoutContext);
  const { playbackStatus } = useContext(SongInformationContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#244196",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          zIndex: 100,
        },
        headerTintColor: "#ffff",
      }}
    >
      <Stack.Screen
        name="BottomNavigation"
        component={BottomTabNavigation}
        options={{
          headerTitleStyle: {
            fontSize: 18,
            // fontWeight: "bold",
          },
          title: showLikedSongsHeader ? "Liked Song" : "",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={28}
              color="#ffff"
              style={{ marginRight: 20 }}
            />
          ),

          headerRight: () => {
            return (
              showTogglePauseScrollButton && (
                <Pressable
                  style={styles.linkedSongsPlaybutton}
                  // onPress={() => handlePlayback(playbackStatus, true)}
                >
                  {playbackStatus.isPlaying ? (
                    <Ionicons name="pause" size={24} color="black" />
                  ) : (
                    <Ionicons name="play" size={24} color="black" />
                  )}
                </Pressable>
              )
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  linkedSongsPlaybutton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#57B660",
    zIndex: 100,
  },
});
