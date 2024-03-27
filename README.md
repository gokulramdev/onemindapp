## INSTALL DEPENDENCY

`$ yarn`

## INSTALL THE DEBUG APP

`$ react-native run-android`

## BUILD

Install dependencies, run the following command

```
$ cd android && ENVFILE=.env.development ./gradlew clean && cd .. &&
```

Use any following command to install debug app.
`$ npm run buildDevelopmentDebug`
`$ npm run buildStagingDebug`
`$ npm run buildProductionDebug`

## START THE DEBUG APP

`$ npm start`
Or to start in a different port
`npm start -- --port=8082`
Or with reset cache
`$ npm start -- --port=8082 --reset-cache`

## For production ready builds

To create the assemeble release (apk).
`$ cd android && ./gradlew assembleRelease` .

To create actual release (aar) for internal testing
`$ cd android && ENVFILE=.env.staging ./gradlew bundleStagingRelease`

To create actual release (aar) for internal testing
`$ cd android && ENVFILE=.env.production ./gradlew bundleProductionRelease && cd ..`

### Different environments (Not tested)

Save config for different environments in different files: .env.staging, .env.production, etc.
By default react-native-config will read from .env file, but you can change it when building or releasing your app.
The simplest approach is to tell it what file to read with an environment variable, like:

#### ANDROID debug builds (For all ENV)

`$ npm run buildDevelopmentDebug`
`$ npm run buildStagingDebug`
`$ npm run buildProductionDebug`

#### ANDROID (For production release)

`$ ENVFILE=.env.production react-native run-android`

`$ ENVFILE=.env.development react-native run-android --variant=stagingDebug --appIdSuffix=staging`

#### IOS (For staging)

`$ yarn`
`$ PROJECT_PATH='/Users/muraligs/projects/consumer/' pod install`

`$ ENVFILE=.env.staging react-native run-ios`
or
Use XCode

## DEEP LINK

The following code shows on how to test a deep link. For more information refer this [link](https://reactnavigation.org/docs/deep-linking)

`$ adb shell am start -W -a android.intent.action.VIEW -d "coreful.instock.consumer://home/orders" cft.instock.consumer`

with flavors

`$ adb shell am start -W -a android.intent.action.VIEW -d "coreful.instock.consumer://home/cart" com.instockconsumerapp.staging`

## DEPRECATED NOTES

- The dependency '@react-native-community/viewpager' is addeded for 'react-native-scrollable-tab-view' library. If we no more use this library, then we can remove this library.

## COMMON ERRORS

- react navigation build errror - [git hub ticket](https://github.com/react-navigation/react-navigation/issues/7981)
- Error - "label is not a function (From bottom tab navigation).
  FIX - pass ' tabBarLabel: "" ' in ' Tab.Screen (component) -> options (props) '

## Other info

For renaming the package name
https://stackoverflow.com/questions/37389905/change-package-name-for-android-in-react-native

## PlantUML

VS code settings update
Set "Plantuml: Export Out Dir" to '**designs**/out'

#### WINDOWS Version

yarn
$env:ENVFILE = '.env.development'
yarn run buildDevelopmentDebugWindows

### update local.properties

sdk.dir=C:\\Users\\<Username>\\AppData\\Local\\Android\\Sdk

cd android
.\gradlew.bat clean --debug

### Github issues

1. local.properties file is tracked already, so to ignore local changes please use the following command to
   prevent that from adding to the diff list.
   `$ git update-index --assume-unchanged "android/local.properties"`

To revert that change
`$ git update-index --no-assume-unchanged "android/local.properties"`

The following command is added to prevent ' ^M ' that is added automatically. Experimental change. Please let us know if you face any issues.
`$ git config --global core.autocrlf true`
