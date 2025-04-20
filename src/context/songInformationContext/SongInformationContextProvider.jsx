import React, { useState } from "react";
import { SongInformationContext } from "./SongInformationContext";

import { Songs } from "../../testData/JsonData";

const SongInformationContextProvider = ({ children }) => {
  const [songList, setSongList] = useState(Songs);
  const [isSortModalVisible, setSortModalVisible] = useState(false);
  const [isExpandedPlayerVisible, setExpandedPlayerVisible] = useState(false);
  const [isMiniPlayerVisible, setIsMiniPlayerVisible] = useState(false);

  // currentSong is required for EXPO-AV
  const [playbackStatus, setplaybackStatus] = useState({
    isPlaying: false,
    currentSong: null,
    currentPlayingSongData: null,
  });

  function toggleExpandedPlayers() {
    setExpandedPlayerVisible(!isExpandedPlayerVisible);
  }
  function toggleSortModal(state) {
    setSortModalVisible(state);
  }
  function toggleMiniPlayer(state) {
    setIsMiniPlayerVisible(state);
  }

  function togglePlayback(playingState, currentSong, currentPlayingSongData) {
    setplaybackStatus({
      isPlaying: playingState,
      currentSong: currentSong,
      currentPlayingSongData: currentPlayingSongData,
    });
  }

  function changeSong(newSong) {
    setplaybackStatus((prev) => {
      return {
        isPlaying: prev.isPlaying,
        currentSong: newSong,
      };
    });
  }

  return (
    <SongInformationContext.Provider
      value={{
        playbackStatus,
        songList,
        isSortModalVisible,
        isExpandedPlayerVisible,
        toggleExpandedPlayers,
        toggleSortModal,
        togglePlayback,
        toggleMiniPlayer,
        isMiniPlayerVisible,
        setplaybackStatus,
      }}
    >
      {children}
    </SongInformationContext.Provider>
  );
};

export default SongInformationContextProvider;
