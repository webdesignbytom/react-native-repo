# react-native-repo
Information and quick start documentation for React Native projects.
## Table of contents

- [react-native-repo](#react-native-repo)
  - [Table of contents](#table-of-contents)
  - [Set up new app](#set-up-new-app)
  - [Dependencies](#dependencies)
  - [Expo Go](#expo-go)
  - [Commands](#commands)
  - [Troubleshooting](#troubleshooting)
  - [Additional Programs](#additional-programs)



## Set up new app
1. Create app folder
2. Create files - _layout.js and index.js
- quick start `npx create-expo-app@latest -example with-router`



## Dependencies
- `npm install expo-font axios react-native-dotenv`
- install test env for mobiles `npm install -g expo-cli`
- `npx expo install react-native@latest`

## Expo Go
- `npx create-expo-app name` Start new project
- `cd name`
- `npx expo install react-dom react-native-web @expo/webpack-config`
- `npx expo start`
## Commands
- `npm start`
- `npx expo start` - start test environment for phones
- `npm run android`
- `npm run ios` # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- `npm run web`
  
## Troubleshooting
- set internet connection to private to connect to test app

## Additional Programs
- Phone test app - Expo Go