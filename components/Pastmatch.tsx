import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

const Pastmatch = ({ item }) => {
  return (
    <View
      style={{
        paddingHorizontal: 5,
        marginBottom: 5,
        flexDirection: "column",
      }}
    >
      <LinearGradient
        colors={["#23074d", "#cc5333"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 7 }}
      >
        <Text style={styles.textMain}>{item.team}</Text>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
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
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  textMain: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    display: "flex",
    textAlign: "center",
    color: "white",
  },
  textTime: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});

export default Pastmatch;
