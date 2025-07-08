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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.textTime}>{item.date}</Text>
          <Text style={styles.textMain}>{item.team}</Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.textMain}>{item.status}</Text>
            </View>
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
    textAlign: "center",
    color: "#f5f5f5",
    marginBottom: 10,
  },
  textTime: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default Pastmatch;
