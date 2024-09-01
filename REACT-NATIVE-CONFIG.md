### Normal use in React Native project

```
import Config from 'react-native-config';
console.log(Config.HOSTNAME);
```

# Native Usage

## Android

```
// Config variables set in .env are available to your Java classes via BuildConfig:
public HttpURLConnection getApiClient() {
    URL url = new URL(BuildConfig.API_URL);
    // ...
}

// You can also read them from your Gradle configuration:
defaultConfig {
    applicationId project.env.get("APP_ID")
}

// And use them to configure libraries in AndroidManifest.xml and others:
<meta-data
  android:name="com.google.android.geo.API_KEY"
  android:value="@string/GOOGLE_MAPS_API_KEY" />

// All variables are strings, so you may need to cast them. For instance, in Gradle:
versionCode project.env.get("VERSION_CODE").toInteger()

```

## iOS / macOS

```
// import header
#import "RNCConfig.h"

// then read individual keys like:
NSString *apiUrl = [RNCConfig envFor:@"API_URL"];

// or just fetch the whole config
NSDictionary *config = [RNCConfig env];
```

# Check more detailed in the package npmjs [https://www.npmjs.com/package/react-native-config](https://www.npmjs.com/package/react-native-config)
