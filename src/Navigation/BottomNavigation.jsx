import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LikedSongs from "../screens/LikedSongs";
import Home from "../screens/Home";
import Premium from "../screens/Premium";
import YourLibrary from "../screens/YourLibrary";
import Foundation from "@expo/vector-icons/Foundation";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { useWindowDimensions } from "react-native";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  const { height, width } = useWindowDimensions();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(0,0,0,0.85)", // Or your desired color
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          position: "absolute",
          height: height * 0.06,
        },
        tabBarInactiveTintColor: "#D3D3D3",

        tabBarActiveTintColor: "#ffff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={LikedSongs}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" size={25} color="#ffff" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="search"
              size={20}
              color={focused ? "#ffff" : "lightgray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="YourLibrary"
        component={YourLibrary}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="library-outline"
              size={20}
              color={focused ? "#ffff" : "#D3D3D3"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="spotify"
              size={20}
              color={focused ? "#ffff" : "#D3D3D3"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigation;
