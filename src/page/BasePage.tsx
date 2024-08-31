import { View, Text } from "react-native";
import React from "react";
import { centerHV, flexChild } from "../styles";
import { useNavigation } from "@react-navigation/native";

export const BasePage = () => {
  const navigation = useNavigation();

  const handleNextPage = () => {
    navigation.navigate("NewScreen");
  };

  return (
    <View style={{ ...flexChild, ...centerHV }}>
      <Text onPress={handleNextPage}>BasePage</Text>
    </View>
  );
};
