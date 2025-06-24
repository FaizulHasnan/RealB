import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Alert,
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
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleAuth = () => {
    if (login) {
      Alert.alert("Logging In", `${email},${password}`, [
        { text: "confirm", style: "destructive" },
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
        colors={["#800000", "#c31432", "#240b36"]}
        start={{ x: 0, y: 1.5 }}
        end={{ x: 0.2, y: -0.5 }}
        style={{ flex: 1 }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.container}>
            <Text style={styles.loginSignup}>
              {login ? "LOGIN" : "BE REAL NOW !!"}
            </Text>
            {login && (
              <TextInput
                style={styles.inputText}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
            )}
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={handleAuth}>
              <Text style={styles.switchText}>
                {setLogin ? "Login" : "Sign Up"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLogin(!login)}>
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
    marginTop: 250,
  },
  loginSignup: {
    fontWeight: "bold",
    fontSize: 28,
    backgroundColor: "white",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
    textAlign: "center",
  },
  switchText: {
    textAlign: "center",
    color: "black",
    marginTop: 12,
  },
  inputText: {
    height: 48,
    // borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 160,
    backgroundColor: "#fafafa",
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: "cover", // or 'contain', 'stretch', etc.
    justifyContent: "center",
    alignItems: "center",
  },
});
