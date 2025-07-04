import { supabase } from "@/lib/supabase";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function EditInfo() {
  const [name, onChangeName] = useState("");
  const [call, onChangeCall] = useState("");
  const [age, onChangeAge] = useState("");
  const [jersey, onChangeJersey] = useState("");
  const [position, onChangePost] = useState("");
  const [number, onChangeNumber] = useState("");
  const [eperson, onChangeEperson] = useState("");
  const [ephone, onChangeEnum] = useState("");
  const { userId } = useLocalSearchParams();

  useEffect(() => {
    // Fetch data from Supabase when the component mounts
    getData();
  }, []);

  const getUpdate = async () => {
    const { error } = await supabase
      .from("players")
      .update({
        fullname: name,
        callname: call,
        age: age,
        jersey: jersey,
        position: position,
        phone: number,
        emergencyperson: eperson,
        emergencyphone: ephone,
      })
      .eq("userId", userId);
    if (error) Alert.alert(error.message);
    return router.navigate("/explore");
  };

  const getData = async () => {
    try {
      const { data, error, status } = await supabase
        .from("players")
        .select("*")
        .eq("userId", userId)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        onChangeName(data.fullname);
        onChangeCall(data.callname);
        onChangeAge(data.age);
        onChangeJersey(data.jersey);
        onChangePost(data.position);
        onChangeNumber(data.phone);
        onChangeEperson(data.emergencyperson);
        onChangeEnum(data.emergencyphone);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <ScrollView style={{}}>
      <LinearGradient
        colors={["#800000", "#000000", "#ffff00"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1.5 }}
      >
        <View>
          <View
            style={{
              backgroundColor: "#8b0000",
              borderRadius: 10,
              marginHorizontal: 90,
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                color: "white",
              }}
            >
              UPDATE YOUR DETAILS
            </Text>
          </View>
          <View>
            <Text style={styles.textMain}>Your Fullname</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeName}
              value={name}
            />
          </View>
          <View>
            <Text style={styles.textMain}>Your Callsign</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeCall}
              value={call}
            />
          </View>
          <View>
            <Text style={styles.textMain}>Your Age</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeAge}
              value={age}
            />
          </View>
          <View>
            <Text style={styles.textMain}>Your Jersey</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeJersey}
              value={jersey}
            />
          </View>
          <View>
            <Text style={styles.textMain}>Your Position</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangePost}
              value={position}
            />
          </View>
          <View>
            <Text style={styles.textMain}>Your Phone Number</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeNumber}
              value={number}
            />
          </View>
          <View>
            <Text style={styles.textMain}>Your Emergency Contact Person</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeEperson}
              value={eperson}
            />
          </View>
          <View>
            <Text style={styles.textMain}>Emergency Contact Number</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeEnum}
              value={ephone}
            />
          </View>
          <View style={{ width: 70 }}>
            <Button onPress={getUpdate} title="SAVE" color="#841584" />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textMain: {
    fontSize: 20,
    marginLeft: 10,
    color: "#f0ffff",
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "yellow",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
