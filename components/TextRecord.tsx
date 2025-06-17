import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const TextRecord = ({ keyRecord, value }) => {
  return (
    <SafeAreaView>
      <View style={styles.box}>
        <LinearGradient
          colors={["#000000", "#80000F", "#daa520"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0.5, y: 0 }}
        >
          <Text style={{ fontSize: 20, color: "#f8f8ff" }}>{keyRecord}</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 90,
              color: "#f8f8ff",
              textAlign: "center",
            }}
          >
            {value}
          </Text>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default TextRecord;

const styles = StyleSheet.create({
  box: {
    width: 180,
    height: 180,
    // backgroundColor: "#800000",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
