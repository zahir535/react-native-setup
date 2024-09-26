import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import TrackPlayer, { useIsPlaying } from "react-native-track-player";

export const PlayPauseButton: React.FC = () => {
  const { playing, bufferingDuringPlay } = useIsPlaying();

  return (
    <View style={styles.container}>
      {bufferingDuringPlay ? (
        <ActivityIndicator />
      ) : (
        <TouchableWithoutFeedback onPress={playing ? TrackPlayer.pause : TrackPlayer.play}>
          <Text>{playing ? "||" : ">"}</Text>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
});
