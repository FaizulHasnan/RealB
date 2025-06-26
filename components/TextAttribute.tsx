import { StyleSheet, Text, View } from "react-native";

const TextAtrribute = ({ keyAtrribute, value }) => {
  return (
    <View style={styles.subText}>
      <Text style={styles.text}>{keyAtrribute}: </Text>
      <Text style={{ fontWeight: "bold", color: "white" }}>{value}</Text>
    </View>
  );
};

export default TextAtrribute;

const styles = StyleSheet.create({
  subText: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
