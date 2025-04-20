import React, { createContext, useState } from "react";

import { LayoutContext } from "./LayoutContext";
const LayoutProvider = ({ children }) => {
  const [showLikedSongsHeader, setShowLikedSongsHeader] = useState(false);
  const [showTogglePauseScrollButton, setShowTogglePauseScrollButton] =
    useState(false);

  const toggleLikedSongsHeader = (state) => {
    setShowLikedSongsHeader(state);
  };

  const togglePauseScrollButton = (state) => {
    setShowTogglePauseScrollButton(state);
  };

  return (
    <LayoutContext.Provider
      value={{
        showLikedSongsHeader,
        toggleLikedSongsHeader,
        showTogglePauseScrollButton,
        togglePauseScrollButton,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
export default LayoutProvider;
