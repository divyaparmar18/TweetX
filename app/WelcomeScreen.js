import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { render } from "react-dom";

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={require("./assets/tweet.png")} />
          <Text style={styles.logoText}>TweetX</Text>
        </View>
        <Text style={styles.tweetText}>
          TweetX is a Social app that lets you share your moments with friends
        </Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        >
          <Text style={styles.text}>Sign IN</Text>
        </TouchableOpacity>

        <View>
          <Text
            onPress={() => this.props.navigation.navigate("RegisterScreen")}
            style={styles.register}
          >
            Create New Account
          </Text>
          <Text style={styles.footer}> @ 2017 Momento Inc</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 450,
    alignSelf: "center",
  },
  logoText: {
    position: "absolute",
    bottom: 380,
    fontSize: 50,
    alignSelf: "center",
    color: "#E96B61",
    fontWeight: "bold",
  },
  tweetText: {
    alignSelf: "center",
    position: "absolute",
    margin: 50,
    textAlign: "center",
    top: 300,
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: "#E96B61",
    bottom: 200,
    justifyContent: "center",
    alignItems: "center",
    // color: "#fff",
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
  register: {
    color: "#E96B61",
    bottom: 150,
    fontSize: 20,
  },
  footer: {
    alignSelf: "center",
    bottom: 40,
  },
});

export default WelcomeScreen;
