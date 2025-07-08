import { useAuthSession } from "@/app/providers/AuthProvider";
import UploadImage from "@/components/UploadImage";
import { supabase } from "@/lib/supabase";
import { LinearGradient } from "expo-linear-gradient";
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
  const [userId, setUserId] = useState();

  useEffect(() => {
    // Fetch data from Supabase when the component mounts
    getData();
  }, []);
  // Get which user session
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // console.log("user", user);
    setUserId(user.id);
    return user.id;
  };
  // Once get user, database can be linked up
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
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // For Logout Purpose
  const handlesignOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) Alert.alert(error.message);
    signOut();
    setLoading(false);
  };
  // For Details edit
  const editinfo = () => {
    router.push({
      pathname: "/EditInfo",
      params: { userId: userId },
    });
  };

  // Upload image from local storage to global storage

  const [image, setImage] = useState(null);

  return (
    <ScrollView style={{}}>
      <View>
        <LinearGradient
          style={{ flex: 1, flexDirection: "row" }}
          colors={["#ffff00", "#000000", "#800000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1.5 }}
        >
          <View>
            <Image
              style={{
                height: 350,
                width: 220,
              }}
              source={{
                uri: image,
              }}
            />

            <UploadImage setImage={setImage} userId={userId} />
          </View>
          <View>
            <View>
              <Image
                style={{
                  height: 180,
                  width: 150,
                  marginVertical: 60,
                  marginHorizontal: 20,
                }}
                source={{
                  uri: "https://triwxbibkxtrvyftqzrh.supabase.co/storage/v1/object/public/realbucket//RealB.png",
                }}
              />
            </View>
            <View style={{}}></View>
          </View>
        </LinearGradient>
      </View>
      <View
        style={{
          backgroundColor: "#f0f8ff",
          marginHorizontal: 130,
          borderRadius: 5,
          marginVertical: 15,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: "black",
          }}
        >
          MY DETAILS
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={styles.textTitle}>Name </Text>
          <Text style={styles.textTitle}>Nickname </Text>
          <Text style={styles.textTitle}>Age </Text>
          <Text style={styles.textTitle}>Jersey No </Text>
          <Text style={styles.textTitle}>Position </Text>
          <Text style={styles.textTitle}>Phone </Text>
        </View>
        <View>
          <Text style={styles.textAbout}>: {player.fullname}</Text>
          <Text style={styles.textAbout}>: {player.callname}</Text>
          <Text style={styles.textAbout}>: {player.age}</Text>
          <Text style={styles.textAbout}>: {player.jersey}</Text>
          <Text style={styles.textAbout}>: {player.position}</Text>
          <Text style={styles.textAbout}>: {player.phone}</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#f0f8ff",
          marginHorizontal: 80,
          borderRadius: 5,
          marginVertical: 15,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 20,
            color: "black",
          }}
        >
          EMERGENCY CONTACT
        </Text>
      </View>
      <View>
        <View>
          <Text style={styles.textContact}>{player.emergencyperson}</Text>
          <Text style={styles.textContact}>{player.emergencyphone}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 20,
        }}
      >
        <Button onPress={editinfo} title="Edit" color="" />
        <Button onPress={handlesignOut} title="Logout" color="red" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  textAbout: {
    color: "black",
    fontSize: 20,
  },
  textTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  textContact: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});
