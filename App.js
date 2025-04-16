import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigation from "./src/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import SongInformationContextProvider from "./src/context/songInformationContext/SongInformationContextProvider";

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <SongInformationContextProvider>
          <Navigation />
        </SongInformationContextProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
