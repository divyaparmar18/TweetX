import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

function RegisterScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.accountText}>Create Account</Text>
        {/* <Image source={require("./assets/back.png")}></Image> */}
      </View>
      <Text>Fill the required details and clicked the process</Text>

      <TextInput
        style={styles.input}
        placeholder="Email ID"
        autoCapitalize="none"
        placeholderTextColor="#000"
        // /onChangeText={(val) => this.onChangeText("username", val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="#000"
        //onChangeText={(val) => this.onChangeText("password", val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        autoCapitalize="none"
        placeholderTextColor="#000"
        // onChangeText={(val) => this.onChangeText("email", val)}
      />
      <Text style={styles.footer}>
        By Creating Account you are automatically accepting all the related to
        the momento
      </Text>
      <TouchableOpacity button style={styles.signUp}>
        <Text style={styles.text}>Sign IN</Text>
      </TouchableOpacity>
    </View>
  );
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
    height: 50,
    position: "absolute",
    backgroundColor: "#E96B61",
    bottom: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
  footer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 180,
    textAlign: "right",
  },
});

export default RegisterScreen;
