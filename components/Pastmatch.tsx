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
        colors={["#000000", "#23074d", "#cc5333"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 7 }}
      >
        <Text style={styles.textMain}>{item.team}</Text>
        <View style={{}}>
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
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  textMain: {
    fontSize: 20,
    fontWeight: "bold",
    display: "flex",
    textAlign: "right",
    color: "white",
  },
  textTime: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
});

export default Pastmatch;
