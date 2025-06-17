import PlayerList from "@/components/PlayerList.tsx";
import PlayerProfile from "@/components/PlayerProfile.tsx";
import { Players } from "@/constants/Players";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
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
        players={Players}
        onSelectPlayer={setSelectedPlayer}
        onPressItem={(item: string) =>
          router.push({
            pathname: "/Details",
            params: {
              item,
            },
          })
        }
      />
      {selectedPlayer && <PlayerProfile player={selectedPlayer} />}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
