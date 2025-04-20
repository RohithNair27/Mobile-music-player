import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useContext } from "react";
import { useSharedValue, withTiming } from "react-native-reanimated";
import Slider from "@react-native-community/slider";

import { Audio } from "expo-av";

import { SongInformationContext } from "../../context/songInformationContext/SongInformationContext";

const SeekBar = () => {
  const {
    isMiniPlayerVisible,
    playbackStatus,
    songList,
    isSortModalVisible,
    isExpandedPlayerVisible,
    toggleExpandedPlayers,
    togglePlayback,
    toggleMiniPlayer,
  } = useContext(SongInformationContext);
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(30); // 3-minute song (in seconds)

  useEffect(() => {
    progress.value = withTiming(max.value, {
      duration: max.value * 1000, // in milliseconds
    });
  }, [playbackStatus.isPlaying]);

  return (
    <View>
      <Slider
        style={styles.songPlayer}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#D3D3D3"
        thumbTintColor="#ffff"
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>0:00</Text>
        <Text style={styles.time}>3:00</Text>
      </View>
    </View>
  );
};

export default SeekBar;

const styles = StyleSheet.create({
  songPlayer: {
    borderRadius: 1,
    width: "105%",
    marginLeft: -10,
    marginRight: -10,
    marginTop: 20,
  },
  timeContainer: {
    width: "99%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  time: {
    color: "gray",
  },
});
