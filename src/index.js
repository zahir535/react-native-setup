/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "../app.json";
import TrackPlayer from "react-native-track-player";

// const exampleTrack1 = {
//   url: "https://cdn.simplecast.com/audio/56a1c6/56a1c6fa-abc9-487c-aed8-a71dbd067aef/95549871-c106-4073-826c-fd9a98f9f8e3/538274343_mamilospod_173_eu_nao_sou_racista_tc.mp3", // Load media from the network
//   title: "Avaritia",
//   artist: "deadmau5",
//   album: "while(1<2)",
//   genre: "Progressive House, Electro House",
//   date: "2014-05-20T07:00:00+00:00", // RFC 3339
//   artwork: "https://whvn.cc/jxp18w", // Load artwork from the network
//   duration: 402, // Duration in seconds
// };

await TrackPlayer.setupPlayer();
// await TrackPlayer.add([exampleTrack1]);

AppRegistry.registerComponent(appName, () => App);

// TrackPlayer.registerPlaybackService(() => require("./services"));
