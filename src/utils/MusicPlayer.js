import { Audio } from "expo-av";

export async function startPlayingSound(URL) {
  const { sound } = await Audio.Sound.createAsync(
    {
      uri: URL,
    },
    { shouldPlay: true }
  );
  return sound;
}

export async function pauseSong(sound) {
  if (sound) {
    await sound.pauseAsync();
    return true;
  }
}

export async function playSong(sound) {
  console.log(sound.currentTime, "here");

  if (sound) {
    await sound.playAsync();
    return true;
  }
}
export const stopAndUnloadSound = async (sound) => {
  if (sound) {
    await sound.stopAsync();
    await sound.unloadAsync();
    sound = null;
  }
};
