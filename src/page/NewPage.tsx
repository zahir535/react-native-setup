import { View, Text } from "react-native";
import React from "react";
import { centerHV, flexChild } from "../styles";

export const NewPage = () => {
  return (
    <View style={{ ...flexChild, ...centerHV }}>
      <Text>NewPage</Text>
    </View>
  );
};
