import { useAuthSession } from "@/app/providers/AuthProvider";
import { LinearGradient } from "expo-linear-gradient";
import Uuid from "expo-modules-core/src/uuid";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginPage() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signIn} = useAuthSession();

  const handleLogin = ():void => {
    const random: string = Uuid.v4();
    //get usersname, password
    signIn(random);
  }

  const handleAuth = () => {
    if (login) {
      Alert.alert("Logging In", `${email}`, [
        { text: "confirm", style: "cancel" },
      ]);
    } else {
      Alert.alert("Signing Up", `${name},${email},${password}`, [
        { text: "confirm", style: "destructive" },
      ]);
    }
  };

  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          "#000000",
          "#800000",
          "#000000",
          "#daa520",
          "#000000",
          "#800000",
          "#000000",
        ]}
        start={{ x: 2, y: 2 }}
        end={{ x: 0.5, y: -3 }}
      >
        <Image
          style={{
            height: 300,
            width: 250,
            margin: "auto",
            // marginTop: 150,
          }}
          source={require("@/assets/images/RealB.png")}
        ></Image>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.container}>
            <Text style={styles.loginSignup}>
              {login ? "WELCOME COMRADES" : "BE REAL NOW !!"}
            </Text>
            {!login && (
              <TextInput
                style={styles.inputText}
                placeholder="Name"
                placeholderTextColor="#f8f8ff"
                value={name}
                onChangeText={setName}
              />
            )}
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#f8f8ff"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#f8f8ff"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.switchText}>
                {login ? "Login" : "Sign Up"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.switchText}>
                {login
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Login"}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    backgroundColor: "transparent",
    padding: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    // marginTop: 250,
  },
  loginSignup: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    // textShadowColor: "gold",
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  switchText: {
    textAlign: "center",
    color: "white",
    marginTop: 12,
  },
  inputText: {
    fontSize: 12,
    fontWeight: "bold",
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    // paddingHorizontal: 160,a
    // backgroundColor: "#fafafa",
    textAlign: "center",
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: "cover", // or 'contain', 'stretch', etc.
    justifyContent: "center",
    alignItems: "center",
  },
});
