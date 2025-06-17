import PlayerProfile from "@/components/PlayerProfile";
import { Players } from "@/constants/Players";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
  const { item } = useLocalSearchParams();

  const Player = Players.find((i) => i.id === item);
  console.log("Player", Player, item);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Player?.callname}</Text>
      <PlayerProfile player={Player} />
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
