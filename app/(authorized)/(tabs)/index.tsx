import { useAuthSession } from "@/app/providers/AuthProvider";
import PlayerList from "@/components/PlayerList";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [players, setPlayers] = useState([]);
  const {signOut} = useAuthSession()

  useEffect(() => {
    // Fetch data from Supabase when the component mounts
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data, error, status } = await supabase
        .from("users")
        .select("*")
        .order("callname", { ascending: true });

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setPlayers(data);
        console.log("getData", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Real B Players
      </Text>
      <PlayerList
        players={players}
        onPressItem={(itemId: string) =>
          router.push({
            pathname: "/Details",
            params: {
              itemId,
            },
          })
        }
      />
      <TouchableOpacity onPress={signOut} style={{ marginTop: 20, alignItems: 'center' }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
