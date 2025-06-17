import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const PlayerList = ({ players, onPressItem }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item.id)}
        style={{
          padding: 5,
          marginBottom: 5,
          borderRadius: 1,
        }}
      >
        <LinearGradient
          colors={["#2E3192", "#80000F", "#daa520"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0.5, y: 0 }}
        >
          <Text style={{ fontSize: 18, color: "#ffffff" }}>
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

const styles = StyleSheet.create({});
