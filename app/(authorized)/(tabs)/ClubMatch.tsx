import MatchDay from "@/components/MatchDay";
import Nextmatch from "@/components/Nextmatch";
import Pastmatch from "@/components/Pastmatch";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClubMatch() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    // Fetch data from Supabase when the component mounts
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data, error, status } = await supabase
        .from("fixtures")
        .select("*");
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setFixtures(data);
        // console.log("Data fetched successfully:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const parseDateString = (dateString) => {
    const [year, month, day] = dateString.split("-").map(Number);

    return new Date(year, month - 1, day + 1);
  };

  const checkPastDate = (date) => {
    const parseDate = parseDateString(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    parseDate.setHours(0, 0, 0, 0);

    return today > parseDate;
  };

  const pastMatchData = fixtures
    .filter((i) => checkPastDate(i.date))
    .sort((a, b) => parseDateString(b.date) - parseDateString(a.date));
  const nextMatchData = fixtures.filter((i) => !checkPastDate(i.date));

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 10,
          marginTop: 50,
          textAlign: "center",
          color: "white",
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
          color: "red",
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
    color: "white",
    flex: 1,
    display: "flex",
  },
});
