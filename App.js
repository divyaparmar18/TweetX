import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import {
  createAppContainer,
  createSwitchNavigator,
  createNavigator,
} from "react-navigation";

import WelcomeScreen from "./app/WelcomeScreen";
import RegisterScreen from "./app/registerScreen";
import LoginScreen from "./app/login";
import firebase from "./congif/firebase";

// import firebase from "firebase";
// firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  RegisterScreen: RegisterScreen,
  LoginScreen: LoginScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
