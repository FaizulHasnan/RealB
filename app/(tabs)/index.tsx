import PlayerList from "@/components/PlayerList.tsx";
import { Players } from "@/constants/Players";
import { router } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  // const [selectedPlayer, setSelectedPlayer] = useState(null);
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
        onPressItem={(itemId: string) =>
          router.push({
            pathname: "/Details",
            params: {
              itemId,
            },
          })
        }
      />
      {/* {selectedPlayer && <PlayerProfile player={selectedPlayer} />} */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
