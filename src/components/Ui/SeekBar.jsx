import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSharedValue } from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";

const SeekBar = () => {
  const progress = useSharedValue(90);
  const min = useSharedValue(0);
  const max = useSharedValue(100);
  return (
    <Slider
      style={styles.container}
      progress={progress}
      minimumValue={min}
      maximumValue={max}
    />
  );
};

export default SeekBar;

const styles = StyleSheet.create({});
