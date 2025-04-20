import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigation from "./src/Navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import SongInformationContextProvider from "./src/context/songInformationContext/SongInformationContextProvider";
import NavigationIndex from "./src/Navigation/NavigationIndex";
export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationIndex />
    </GestureHandlerRootView>
  );
}
