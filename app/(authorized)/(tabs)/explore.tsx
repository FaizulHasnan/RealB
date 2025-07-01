import { useAuthSession } from "@/app/providers/AuthProvider";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function TabTwoScreen() {
  const [loading, setLoading] = useState(false);
  const { signOut } = useAuthSession();
  const [player, setPlayer] = useState({});

  useEffect(() => {
    // Fetch data from Supabase when the component mounts
    getData();
  }, []);

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log("user", user);

    return user.id;
  };

  const getData = async () => {
    const Uid = await getUser();
    try {
      const { data, error, status } = await supabase
        .from("players")
        .select("*")
        .eq("userId", Uid)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setPlayer(data);
        console.log("Data", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlesignOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) Alert.alert(error.message);
    signOut();
    setLoading(false);
  };

  const editinfo = () => {
    router.navigate("/EditInfo");
  };
  return (
    <ScrollView>
      <View style={{ backgroundColor: "yellow" }}>
        <Text>About You</Text>
        <View style={{ backgroundColor: "black", flexDirection: "row" }}>
          <Image
            style={{ height: 350, width: 220 }}
            source={{
              uri: "https://triwxbibkxtrvyftqzrh.supabase.co/storage/v1/object/public/realbucket//Faizul.png",
            }}
          />
          <Image
            style={{ height: 250, width: 200 }}
            source={{
              uri: "https://triwxbibkxtrvyftqzrh.supabase.co/storage/v1/object/public/realbucket//RealB.png",
            }}
          />
        </View>
      </View>
      <View>
        <Text style={styles.textAbout}>{player.fullname}</Text>
        <Text style={styles.textAbout}>{player.callname}</Text>
        <Text style={styles.textAbout}>{player.age}</Text>
        <Text style={styles.textAbout}>{player.jersey}</Text>
        <Text style={styles.textAbout}>{player.position}</Text>
        <Text style={styles.textAbout}>{player.attribute}</Text>
        <Text style={styles.textAbout}>
          {player.attr} - {player.level}
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}>
          Contact Details
        </Text>
        <View>
          <Text>{player.phone}</Text>
          <Text>{player.emergencyperosn}</Text>
          <Text>{player.emergencycontact}</Text>
        </View>
      </View>
      <View>
        <Button onPress={editinfo} title="Edit" color="" />
        <Button onPress={handlesignOut} title="Logout" color="" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  textAbout: {
    color: "black",
    fontSize: 20,
  },
});
