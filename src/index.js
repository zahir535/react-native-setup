/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import TrackPlayer from "react-native-track-player";
import { PlaybackService } from "./services";
import { name as appName } from "../app.json";
import "mux.js";

// Inject stylesheet
document.head.appendChild(style);
/******************************************
 * END: react-native-vector-icons import
 ******************************************/

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => PlaybackService);

// Error: Unable to resolve module ./index from /Users/zahir/Desktop/exploration/react-native-blocks/.:

// None of these files exist:
//   * index(.native|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx)
//   * index/index(.native|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx)
//     at ModuleResolver.resolveDependency (/Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:114:15)
//     at DependencyGraph.resolveDependency (/Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/node-haste/DependencyGraph.js:277:43)
//     at /Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/lib/transformHelpers.js:169:21
//     at Server._resolveRelativePath (/Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/Server.js:1045:12)
//     at async Server.requestProcessor [as _processBundleRequest] (/Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/Server.js:449:37)
//     at async Server._processRequest (/Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/Server.js:383:7)
// Error: Unable to resolve module ./index from /Users/zahir/Desktop/exploration/react-native-blocks/.:

// None of these files exist:
//   * index(.native|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx)
//   * index/index(.native|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx)
//     at ModuleResolver.resolveDependency (/Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:114:15)
//     at DependencyGraph.resolveDependency (/Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/node-haste/DependencyGraph.js:277:43)
//     at /Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/lib/transformHelpers.js:169:21
//     at Server._resolveRelativePath (/Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/Server.js:1045:12)
//     at async Server.requestProcessor [as _processBundleRequest] (/Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/Server.js:449:37)
//     at async Server._processRequest (/Users/zahir/Desktop/exploration/react-native-blocks/node_modules/metro/src/Server.js:383:7)
