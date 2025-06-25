import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PlayerList = ({ players, onPressItem }) => {
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <TouchableOpacity
          onPress={() => onPressItem(item.id)}
          style={{
            margin: -30,
          }}
        >
          <LinearGradient
            colors={["#000000", "#80000F", "#daa520"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <Text
              style={{ fontSize: 20, color: "#ffffff", textAlign: "center" }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.callname}</Text> - (
              {item.position})
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
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
