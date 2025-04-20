import { View, Text } from "react-native";
import React from "react";
import StackNavigation from "./StackNavigation";

import LayoutProvider from "../context/uiContext/LayoutContextProvider";
import SongInformationContextProvider from "../context/songInformationContext/SongInformationContextProvider";
import { NavigationContainer } from "@react-navigation/native";

const NavigationIndex = () => {
  return (
    <SongInformationContextProvider>
      <LayoutProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </LayoutProvider>
    </SongInformationContextProvider>
  );
};

export default NavigationIndex;
