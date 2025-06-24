import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MatchDay = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/GameList",
          params: { itemID: item.id },
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
        colors={["#800000", "#c31432", "#240b36"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0.2, y: -0.5 }}
        style={{ borderRadius: 15 }}
      >
        <View>
          <Text style={styles.textTitle}>Match Day</Text>
          <Text style={styles.textMain}>{item.team}</Text>
          <View>
            <View>
              <Text style={styles.textTime}>{item.venue}</Text>
            </View>
            <Text style={styles.textTime}>
              {item.date}
              {" / "}
              {item.day}
              {" - "}
              {item.time}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
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
    color: "#00ff00",
    flex: 1,
    display: "flex",
    textAlign: "center",
  },
  textTime: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default MatchDay;
