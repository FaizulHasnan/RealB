import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const PlayerList = ({ players, onPressItem }) => {
  const renderItem = ({ item }) => {
    console.log(item.imageUrl);
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item.id)}
        style={{ marginHorizontal: 10, marginBottom: 10 }}
      >
        <LinearGradient
          colors={["#000000", "#80000F", "#daa520"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={{ fontSize: 20, color: "#ffffff", textAlign: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{item.callname}</Text> - (
            {item.position})
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={players}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};
export default PlayerList;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    height: 300,
    width: 10,
    resizeMode: "cover",
  },
  container: {
    flexDirection: "row",
    // justifyContent: "flex-start",
  },
});
