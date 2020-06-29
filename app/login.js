import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

class LoginScreen extends Component {
  // async signInWithEmail() {
  //   await firebase
  //     .auth()
  //     .signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(this.onLoginSuccess.bind(this))
  //     .catch((error) => {
  //       let errorCode = error.code;
  //       let errorMessage = error.message;
  //       if (errorCode == "auth/weak-password") {
  //         this.onLoginFailure.bind(this)("Weak Password!");
  //       } else {
  //         this.onLoginFailure.bind(this)(errorMessage);
  //       }
  //     });
  // }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.accountText}>Sign In</Text>
          {/* <Image source={require("./assets/back.png")}></Image> */}
        </View>
        <Text style={styles.text}>
          Type your email id and password to go to your feed
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email ID"
          autoCapitalize="none"
          placeholderTextColor="#000"
          // value={this.state.email}
          // onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#000"
          // value={this.state.password}
          // onChangeText={(password) => this.setState({ password })}
        />

        <TouchableOpacity button style={styles.signUp}>
          <Text style={styles.textIn}>Sign IN</Text>
        </TouchableOpacity>
        <Text style={styles.forgot}> Forgor Password? Reset Password</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 400,
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    margin: 20,
    padding: 8,
    color: "#000",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "200",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    position: "absolute",
    top: 90,
  },
  accountText: {
    alignSelf: "center",
    fontSize: 30,
  },
  signUp: {
    width: 400,
    height: 60,
    position: "absolute",
    backgroundColor: "#E96B61",
    bottom: 190,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: 10,
  },
  text: {
    position: "absolute",
    top: 200,
  },
  textIn: {
    color: "white",
  },
  forgot: {
    position: "absolute",
    color: "#E96B61",
    bottom: 150,
    fontSize: 20,
  },
});

export default LoginScreen;
