import { supabase } from "@/lib/supabase";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useAuthSession } from "../providers/AuthProvider";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuthSession();

  async function handlesignIn() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    signIn(data.session?.access_token);
    setLoading(false);
  }

  async function handlesignUp() {
    setLoading(true);
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    Alert.alert("Registration Successful", "Welcome To Real B", [
      {
        text: "Proceed To Login",
        style: "destructive",
      },
    ]);
    const { error: error2 } = await supabase
      .from("players")
      .upsert({ userId: user.id, email: email });
    if (error2) Alert.alert(error2.message);
    setEmail("");
    setPassword("");
    setLoading(false);
  }

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
            height: 400,
            width: 360,
            margin: "auto",
            marginTop: 150,
            marginBottom: 20,
          }}
          source={{
            uri: "https://triwxbibkxtrvyftqzrh.supabase.co/storage/v1/object/public/realbucket//RealB.png",
          }}
        ></Image>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            No Drama , Just B
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "yellow",
              fontSize: 15,
              fontWeight: "bold",
              marginBottom: 30,
            }}
          >
            BLOOD . BALL . BROTHERHOOD
          </Text>
          <View style={styles.container}>
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
            <View style={{}}>
              <View
                style={{
                  paddingTop: 10,
                  paddingBottom: 4,
                  alignSelf: "stretch",
                }}
              >
                <Button
                  title="LOGIN"
                  color="#8b0000"
                  disabled={loading}
                  onPress={() => handlesignIn()}
                />
              </View>
              <View
                style={{
                  paddingTop: 4,
                  paddingBottom: 4,
                  alignSelf: "stretch",
                }}
              >
                <Button
                  title="REGISTER"
                  disabled={loading}
                  onPress={() => handlesignUp()}
                />
              </View>
            </View>
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
  },
  loginSignup: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textAlign: "center",
    margin: 10,
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

    textAlign: "center",
    color: "white",
  },
});
