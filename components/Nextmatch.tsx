import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Nextmatch = ({ item }) => {
  console.log("item Next", item);
  return (
    <View
      style={{
        padding: 4,
        marginBottom: 1,
        flexDirection: "column",
      }}
    >
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/(authorized)/GameList",
            params: { oppoTeam: item.team },
          })
        }
        style={{
          padding: 10,
          marginBottom: 5,
          borderRadius: 1,
          flexDirection: "column",
        }}
      >
        <LinearGradient
          colors={["#000000", "#ad5389", "#3c1053"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 2, y: 0 }}
          style={{ borderRadius: 10 }}
        >
          <View>
            <Text style={styles.textTitle}>Next Match</Text>
            <Text style={styles.textMain}>{item.team}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View>
                <Text style={styles.textTime}>
                  {item.date}
                  {"   "}
                  {item.day}
                  {" - "}
                  {item.time}
                </Text>
              </View>
              <View>
                <Text style={styles.textTime}>{item.venue}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textMain: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    display: "flex",
    textAlign: "center",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "yellow",
    flex: 1,
    display: "flex",
    textAlign: "center",
  },
  textTime: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});

export default Nextmatch;
