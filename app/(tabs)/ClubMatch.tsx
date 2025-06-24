import MatchDay from "@/components/MatchDay";
import Nextmatch from "@/components/Nextmatch";
import Pastmatch from "@/components/Pastmatch";
import { Fixtures } from "@/constants/Fixtures";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClubMatch() {
  const parseDateString = (dateString) => {
    const [day, month, year] = dateString.split("/").map(Number);

    return new Date(year, month - 1, day + 1);
  };

  const checkPastDate = (date) => {
    const parseDate = parseDateString(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    parseDate.setHours(0, 0, 0, 0);

    return today > parseDate;
  };

  const pastMatchData = Fixtures.filter((i) => checkPastDate(i.date)).sort(
    (a, b) => parseDateString(b.date) - parseDateString(a.date)
  );
  const nextMatchData = Fixtures.filter((i) => !checkPastDate(i.date));

  const renderPastMatch = ({ item, index }) => {
    return <Pastmatch item={item} />;
  };
  const renderNextMatch = ({ item, index }) => {
    if (parseDateString(item.date) > new Date()) {
      return <Nextmatch item={item} />;
    }
    return <MatchDay item={item} />;
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 10,
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Game Fixtures
      </Text>
      <View>
        <FlatList
          data={nextMatchData} //nextMatchData
          keyExtractor={(item) => item.id}
          renderItem={renderNextMatch}
        />
      </View>
      <Text
        style={{
          paddingVertical: 5,
          fontSize: 20,
          marginTop: 15,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Past Match
      </Text>
      <FlatList
        data={pastMatchData} //pastMatchData
        keyExtractor={(item) => item.id}
        renderItem={renderPastMatch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textMain: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    flex: 1,
    display: "flex",
  },
});
