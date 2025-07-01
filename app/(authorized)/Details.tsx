import PlayerProfile from "@/components/PlayerProfile";
import { supabase } from "@/lib/supabase";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default async function Details() {
  const { itemId } = useLocalSearchParams();

  const [player, setPlayer] = useState({});

  useEffect(() => {
    // Fetch data from Supabase when the component mounts
    getData();
  }, [itemId]);

  const getData = async () => {
    try {
      const { data, error, status } = await supabase
        .from("players")
        .select("*")
        .eq("id", itemId)
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{player?.callname}</Text>
      <PlayerProfile player={player} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8ff",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
