import { StyleSheet, Text, View } from "react-native";

const ComponentB = ({ i }) => {
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
      <View>
        <Text>Next Match</Text>
        <Text style={styles.textMain}>{i.team}</Text>
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

export default ComponentB;
