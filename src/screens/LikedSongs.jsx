import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  useWindowDimensions,
  Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect, useRef } from "react";

import { SongInformationContext } from "../context/songInformationContext/SongInformationContext";
import { LayoutContext } from "../context/uiContext/LayoutContext";

import SearchBar from "../components/SearchBar";
import SongContainer from "../components/SongContainer";
import MusicPlayerModal from "../components/Modal/MusicPlayerModal";
import BottomSheet from "../components/Modal/BottomSheet";
import MiniPlayer from "../components/Modal/MiniPlayer";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

import {
  startPlayingSound,
  pauseSong,
  playSong,
  stopAndUnloadSound,
} from "../utils/MusicPlayer";
const LikedSongs = () => {
  const {
    isMiniPlayerVisible,
    playbackStatus,
    songList,
    isSortModalVisible,
    isExpandedPlayerVisible,
    toggleExpandedPlayers,
    togglePlayback,
    toggleMiniPlayer,
    toggleSortModal,
  } = useContext(SongInformationContext);

  const { toggleLikedSongsHeader, togglePauseScrollButton } =
    useContext(LayoutContext);
  const { height } = useWindowDimensions();

  const [searchButtonText, setSearchButtonText] = useState("");

  // This is for logging purposes
  const scrollY = useRef(new Animated.Value(0)).current;
  const handleScroll = (event) => {
    scrollY.current = event.nativeEvent.contentOffset.y;
    if (scrollY.current > 140) {
      toggleLikedSongsHeader(true);
    } else {
      toggleLikedSongsHeader(false);
    }
    if (scrollY.current > 220) {
      togglePauseScrollButton(true);
    } else {
      togglePauseScrollButton(false);
    }
  };

  // Whenever the user clicks on the song container
  const handleSongSelect = async (songInfo) => {
    toggleExpandedPlayers();
    handlePlayback(songInfo);
  };

  const handlePlayback = async (songInfo, pausedButton = false) => {
    if (!pausedButton) {
      //User selects new song - remove the old and add new song
      if (playbackStatus.isPlaying) {
        await stopAndUnloadSound(playbackStatus.currentSong);
      }
      const currentSong = await startPlayingSound(songInfo.mp4_link);
      togglePlayback(true, currentSong, songInfo);
    } else {
      // toggle play and pause
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
    }

    toggleMiniPlayer(true);
  };

  const handleToggleSortModal = async () => {
    toggleSortModal(!isSortModalVisible);
  };
  const handleSearchBar = (text) => {
    setSearchButtonText(text);
  };
  const filteredSongs = songList.filter((eachSong) =>
    eachSong.title.includes(searchButtonText)
  );

  return (
    <>
      {isMiniPlayerVisible && (
        <MiniPlayer
          onPressPlayback={handlePlayback}
          onPressMiniPlayer={toggleExpandedPlayers}
        />
      )}

      <Animated.ScrollView scrollEventThrottle={16} onScroll={handleScroll}>
        <StatusBar
          style="light"
          // backgroundColor={isSortModalVisible ? "#101931" : "#121212"}
        />

        <BottomSheet
          isModalVisible={isSortModalVisible}
          toggleModal={handleToggleSortModal}
        />

        <MusicPlayerModal
          isModalVisible={isExpandedPlayerVisible}
          toggleModal={toggleExpandedPlayers}
          songInfo={playbackStatus.currentPlayingSongData}
        />

        <LinearGradient
          colors={["#244196", "#121212"]}
          locations={[0, 0.2]}
          style={{ ...styles.container }}
        >
          <View style={styles.inputContainer}>
            <SearchBar onChange={handleSearchBar} />
            <Pressable
              style={styles.sortButton}
              onPress={handleToggleSortModal}
            >
              <Text style={{ color: "white" }}>Sort</Text>
            </Pressable>
          </View>

          <View style={styles.linkedSongsPlaybuttonContainer}>
            <Text style={styles.likedText}>Liked Songs</Text>
            <View style={styles.downLoadPlayContaier}>
              <View style={styles.downloadContainer}>
                <Text style={styles.smallText}>{songList.length} songs</Text>
                <MaterialCommunityIcons
                  name="download-circle-outline"
                  size={30}
                  color="rgba(255, 255, 255, 0.5)"
                />
              </View>

              <View style={styles.playButtonContainer}>
                <Ionicons name="shuffle-outline" size={30} color="#57B660" />
                <Pressable
                  style={styles.linkedSongsPlaybutton}
                  onPress={() => handlePlayback(playbackStatus, true)}
                >
                  {playbackStatus.isPlaying ? (
                    <Ionicons name="pause" size={24} color="black" />
                  ) : (
                    <Ionicons name="play" size={24} color="black" />
                  )}
                </Pressable>
              </View>
            </View>
          </View>

          <View
            style={{
              ...styles.songsContainer,
              marginBottom: height * 0.15,
              minHeight: height / 2,
            }}
          >
            {filteredSongs.length > 0 ? (
              filteredSongs.map((eachSong) => (
                <SongContainer
                  songInfo={eachSong}
                  key={eachSong.id}
                  onPress={handleSongSelect}
                />
              ))
            ) : (
              <View style={{ marginTop: 50, alignItems: "center" }}>
                <Text style={styles.likedText}>No results found</Text>
                <Text style={styles.smallText}>
                  Check the spellings or try different keywords
                </Text>
              </View>
            )}
          </View>
        </LinearGradient>
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 5,
  },
  inputContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 80,
  },
  linkedSongsPlaybuttonContainer: {
    height: "6%",
    width: "90%",
    // borderWidth: 1,
  },
  downLoadPlayContaier: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  songsContainer: {
    marginTop: 40,
    borderColor: "white",
    // marginBottom: 60,
  },
  sortButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    color: "white",
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  likedText: {
    color: "#ffff",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },
  smallText: {
    color: "#D3D3D3",
  },
  downloadContainer: {
    height: "90%",
    alignContent: "space-between",
    justifyContent: "space-around",
  },
  playButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
    // borderWidth: 1,
  },
  linkedSongsPlaybutton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#57B660",
    marginLeft: 20,
  },
});

export default LikedSongs;
