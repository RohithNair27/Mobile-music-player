import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";

import React, { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Modal from "react-native-modal";
import Feather from "@expo/vector-icons/Feather";
import { SongInformationContext } from "../../context/songInformationContext/SongInformationContext";

const MiniPlayer = ({ onPressPlayback, onPressMiniPlayer }) => {
  const { height, width } = useWindowDimensions();

  const { playbackStatus, isMiniPlayerVisible } = useContext(
    SongInformationContext
  );
  return (
    <Modal
      isVisible={isMiniPlayerVisible}
      hasBackdrop={false}
      coverScreen={false}
    >
      <Pressable
        onPress={onPressMiniPlayer}
        style={{
          ...styles.miniPlayerContainer,
          backgroundColor:
            playbackStatus?.currentPlayingSongData?.artwork_bg_color,
          marginBottom: height * 0.038,
        }}
      >
        <Image
          source={{
            uri: playbackStatus?.currentPlayingSongData?.artwork,
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View>
          <Text style={styles.headerText}>
            {playbackStatus?.currentPlayingSongData?.title}
          </Text>
          <Text style={styles.singerNameText}>
            {playbackStatus?.currentPlayingSongData?.artist}
          </Text>
        </View>
        <View style={styles.miniPlayerIconContainer}>
          <FontAwesome6 name="computer" size={22} color="#ffff" />
          <TouchableOpacity style={styles.inLikedContainer}>
            <Feather
              name="check"
              size={20}
              color={playbackStatus?.currentPlayingSongData?.artwork_bg_color}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressPlayback(playbackStatus, true)}
          >
            {playbackStatus.isPlaying ? (
              <Ionicons name="pause" size={22} color="#ffff" />
            ) : (
              <Ionicons name="play" size={22} color="#ffff" />
            )}
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default MiniPlayer;

const styles = StyleSheet.create({
  miniPlayerContainer: {
    position: "absolute",
    padding: 9,
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
    // marginRight: 10,
  },

  headerText: {
    color: "#ffff",
    fontSize: 15,
    fontWeight: "700",
  },
  singerNameText: {
    color: "lightgray",
    fontSize: 12,
  },
  miniPlayerIconContainer: {
    display: "flex",
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-between",
  },
  inLikedContainer: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#57B660",
  },
});
