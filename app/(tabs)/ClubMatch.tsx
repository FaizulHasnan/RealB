import { Fixtures } from "@/constants/Fixtures";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClubMatch() {
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
        Game Fixtures
      </Text>
      <FlatList
        data={Fixtures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                padding: 1,
                marginBottom: 5,
                borderRadius: 1,
                backgroundColor: "#white",
                flexDirection: "column",
              }}
            >
              <Text style={styles.textMain}>{item.team}</Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={{ fontSize: 17 }}>
                    {item.date}
                    {" / "}
                    {item.day}
                    {" - "}
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: 200,
                    backgroundColor: "#bdb76b",
                    alignContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 15 }}>{item.venue}</Text>
                </View>
              </View>
            </View>
          );
        }}
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
