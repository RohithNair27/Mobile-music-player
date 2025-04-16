import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Modal from "react-native-modal";

import { SongInformationContext } from "../../context/songInformationContext/SongInformationContext";

const MiniPlayer = () => {
  const HEIGHT = Dimensions.get("screen").height;
  const WIDTH = Dimensions.get("window").width;

  const {
    currentPlayingSong,
    playbackStatus,
    songList,
    isSortModalVisible,
    isExpandedPlayerVisible,
    toggleExpandedPlayers,
    togglePlayback,
    isMiniPlayerVisible,
  } = useContext(SongInformationContext);
  console.log(playbackStatus.currentPlayingSongData);
  return (
    <Modal
      isVisible={isMiniPlayerVisible}
      hasBackdrop={false}
      deviceHeight={HEIGHT}
      deviceWidth={WIDTH}
      coverScreen={false}
    >
      <View
        style={{
          ...styles.miniPlayerContainer,
          backgroundColor:
            playbackStatus?.currentPlayingSongData?.artwork_bg_color,
        }}
      >
        <Image
          source={{
            uri: playbackStatus?.currentPlayingSongData?.artwork,
          }}
          style={styles.image}
        />
        <View>
          <Text>{playbackStatus?.currentPlayingSongData?.title}</Text>
          <Text>{playbackStatus?.currentPlayingSongData?.artist}</Text>
        </View>
        <View>
          {playbackStatus.isPlaying ? (
            <Ionicons name="pause" size={24} color="black" />
          ) : (
            <Ionicons name="play" size={24} color="black" />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default MiniPlayer;

const styles = StyleSheet.create({
  miniPlayerContainer: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "white",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: { width: "20%", height: "80%", borderRadius: 10 },
});
