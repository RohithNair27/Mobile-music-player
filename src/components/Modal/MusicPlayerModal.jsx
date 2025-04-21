import React, { useState, useContext } from "react";
import Modal from "react-native-modal";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Feather from "@expo/vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SeekBar from "../Ui/SeekBar";

import { LinearGradient } from "expo-linear-gradient";

import { pauseSong, playSong } from "../../utils/MusicPlayer";

import { SongInformationContext } from "../../context/songInformationContext/SongInformationContext";

const MusicPlayerModal = ({
  toggleModal,
  isModalVisible,
  songInfo,
  onPressPlayNext,
  onPressPlayPrevious,
}) => {
  const { playbackStatus, togglePlayback } = useContext(SongInformationContext);
  const handlePlayBack = async () => {
    if (playbackStatus.isPlaying) {
      togglePlayback(
        false,
        playbackStatus.currentSong,
        playbackStatus.currentPlayingSongData
      );
      await pauseSong(playbackStatus.currentSong);
    } else {
      togglePlayback(
        true,
        playbackStatus.currentSong,
        playbackStatus.currentPlayingSongData
      );
      await playSong(playbackStatus.currentSong);
    }
  };
  return (
    <Modal
      isVisible={isModalVisible}
      style={{ margin: 0 }}
      onBackdropPress={toggleModal}
      onBackButtonPress={toggleModal}
      useNativeDriverForBackdrop={true}
      hideModalContentWhileAnimating={true}
      // swipeDirection={("left", "right")}
    >
      <StatusBar style="light" backgroundColor={songInfo?.artwork_bg_color} />
      <LinearGradient
        colors={[songInfo?.artwork_bg_color, "#121212"]}
        locations={[0, 1.3]}
        style={{
          ...styles.modalContainer,
          backgroundColor: songInfo?.artwork_bg_color,
        }}
      >
        <View style={styles.modalHeaderContainer}>
          <AntDesign
            name="down"
            size={24}
            color="#ffff"
            onPress={() => toggleModal()}
          />
          <View style={styles.modalHeaderTextContainer}>
            <Text style={styles.songInfoArtistText}>
              PLAYNG FROM YOUR LIBRARY
            </Text>
            <Text style={styles.songInfoTitleText}>Liked Songs</Text>
          </View>
          <SimpleLineIcons name="options-vertical" size={18} color="white" />
        </View>
        <Image
          source={{
            uri: songInfo?.artwork,
          }}
          style={styles.image}
        />
        <View style={styles.songInfoContainer}>
          <View>
            <Text style={styles.songInfoTitleText}>{songInfo?.title}</Text>
            <Text style={styles.songInfoArtistText}>{songInfo?.artist}</Text>
          </View>
          <View style={styles.checkContainer}>
            <Feather
              name="check"
              size={24}
              color={songInfo?.artwork_bg_color}
            />
          </View>
        </View>
        <SeekBar />
        <View style={styles.musicController}>
          <Ionicons name="shuffle-outline" size={30} color="#57B660" />
          <Pressable onPress={onPressPlayPrevious}>
            <Ionicons name="caret-back-sharp" size={40} color="#ffff" />
          </Pressable>
          <Pressable
            style={styles.linkedSongsPlaybutton}
            onPress={handlePlayBack}
          >
            {playbackStatus.isPlaying ? (
              <Ionicons name="pause" size={24} color="black" />
            ) : (
              <Ionicons name="play" size={24} color="black" />
            )}
          </Pressable>
          <Pressable onPress={onPressPlayNext}>
            <Ionicons name="caret-forward-sharp" size={40} color="#ffff" />
          </Pressable>
          <MaterialCommunityIcons
            name="timer-outline"
            size={24}
            color="#ffff"
          />
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default MusicPlayerModal;

const styles = StyleSheet.create({
  headerText: {
    color: "#ffff",
    fontWeight: "600",
  },
  modalContainer: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 25,
    backgroundColor: "green",
  },
  modalHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 35,
  },
  modalHeaderTextContainer: {
    // borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  options: {
    paddingVertical: 15,
  },
  optionsText: {
    color: "#ffff",
  },
  image: { width: "100%", height: "45%", borderRadius: 10, marginBottom: 60 },
  checkContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#57B660",
    marginleft: 20,
  },
  songInfoContainer: {
    display: "flex",
    flexDirection: "row",
    // borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  songInfoTitleText: {
    color: "#ffff",
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 5,
  },
  songInfoArtistText: {
    color: "#ffff",
  },
  linkedSongsPlaybutton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    // marginleft: 20,
  },
  musicController: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
