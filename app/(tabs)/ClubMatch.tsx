import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";
import { Fixtures } from "@/constants/Fixtures";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClubMatch() {
  const renderItem = ({ item, index }) => {
    if (index === 14) {
      return <ComponentB i={item} />;
    }
    return <ComponentA item={item} />;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Game Fixture
      </Text>
      <FlatList
        data={Fixtures}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textMain: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    flex: 1,
    display: "flex",
  },
});
