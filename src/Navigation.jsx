import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LikedSongs from "./screens/LikedSongs";
import AntDesign from "@expo/vector-icons/AntDesign";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#244196",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: "#ffff",
      }}
    >
      <Stack.Screen
        name="LikedSongs"
        component={LikedSongs}
        options={{
          headerTitleStyle: {
            fontSize: 18,
            // fontWeight: "bold",
          },
          title: "",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={28}
              color="#ffff"
              onPress={() => alert("This is a button!")}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
