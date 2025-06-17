import { StyleSheet, Text, View } from "react-native";

const ComponentA = ({ item }) => {
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
          }}
        >
          <Text style={{ fontSize: 15 }}>{item.venue}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textMain: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    flex: 1,
    display: "flex",
  },
});

export default ComponentA;
