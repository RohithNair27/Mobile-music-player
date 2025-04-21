import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavigationIndex from "./src/Navigation/NavigationIndex";
export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationIndex />
    </GestureHandlerRootView>
  );
}
