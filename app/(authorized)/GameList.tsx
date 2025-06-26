import PickerPlayer from "@/components/PickerPlayer";
import { Fixtures } from "@/constants/Fixtures";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const GameList = () => {
  const { itemID } = useLocalSearchParams();

  const OppoTeam = Fixtures.find((i) => i.id === itemID);
  return (
    <ScrollView>
      <LinearGradient
        colors={["#800000", "#c31432", "#240b36"]}
        start={{ x: 0, y: 1.5 }}
        end={{ x: 0.2, y: -0.5 }}
        style={{ borderRadius: 15, marginBottom: 10 }}
      >
        <View style={{ padding: 1 }}>
          <Text
            style={{
              color: "#7cfc00",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            RealB Squad List
          </Text>
          <Text style={styles.textTitle}>{OppoTeam?.team}</Text>
        </View>
      </LinearGradient>
      <PickerPlayer position={"GK"} playerRequired={2} />
      <PickerPlayer position={"CB"} playerRequired={4} />
      <PickerPlayer position={"RB"} playerRequired={2} />
      <PickerPlayer position={"LB"} playerRequired={2} />
      <PickerPlayer position={"DM"} playerRequired={2} />
      <PickerPlayer position={"CM"} playerRequired={4} />
      <PickerPlayer position={"RW"} playerRequired={2} />
      <PickerPlayer position={"LW"} playerRequired={2} />
      <PickerPlayer position={"ST"} playerRequired={2} />
    </ScrollView>
  );
};

export default GameList;

const styles = StyleSheet.create({
  textTitle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
