import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { flexChild } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./navigation";
import { Provider } from "react-redux";
import { store } from "./store";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={flexChild}>
          <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={backgroundStyle.backgroundColor} />
          <RootNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
