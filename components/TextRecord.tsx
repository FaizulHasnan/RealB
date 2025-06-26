import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

const TextRecord = ({ keyRecord, value }) => {
  return (
    <View>
      <View style={styles.box}>
        <LinearGradient
          colors={["#59C173", "#000000", "#5D26C1"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 2 }}
        >
          <Text style={{ paddingLeft: 5, fontSize: 20, color: "#f8f8ff" }}>
            {keyRecord}
          </Text>
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
    </View>
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
