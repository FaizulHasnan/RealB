import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import TextAtrribute from "./TextAttribute";
import TextRecord from "./TextRecord";

const PlayerProfile = ({ player }) => {
  console.log("player", player);
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
        borderRadius: 10,
      }}
      stickyHeaderIndices={[0]}
    >
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={["#59C173", "#000000", "#ffff00"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 2 }}
        >
          <View style={styles.headerText}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: "#ffffff",
                textAlign: "right",
              }}
            >
              {player?.fullname}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#ffffff",
                textAlign: "right",
              }}
            >
              {player?.position}
            </Text>
            {/* <View style={{ justifyContent: "space-between" }}> */}
            <Text
              style={{
                fontSize: 50,
                color: "#ffffff",
                position: "absolute",
                textAlign: "left",
                right: 10,
                top: 30,
              }}
            >
              {player?.jersey}
              {/* <Image style={{width: 100,height: 100,}} source={require("@/assets/images/RealB.jpg")}/> */}
            </Text>
            {/* </View> */}
          </View>
          <Image style={styles.image} source={{ uri: player.imageUrl }} />
        </LinearGradient>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: "#808080",
          marginHorizontal: 3,
        }}
      >
        <Text style={styles.header}>Personal Details</Text>

        <TextAtrribute keyAtrribute={"Age"} value={player?.age} />
        <TextAtrribute keyAtrribute={"Position"} value={player?.position} />
        <TextAtrribute
          keyAtrribute={"Key Attribute"}
          value={player?.attribute}
        />
        <TextAtrribute keyAtrribute={player?.attr} value={player?.level} />
      </View>
      <View>
        <Text style={styles.header}>Club Record</Text>

        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <TextRecord keyRecord={"Appearances"} value={player?.appearances} />
          <TextRecord keyRecord={"Goals"} value={player?.goals} />
          <TextRecord keyRecord={"Wins"} value={player?.wins} />
          <TextRecord keyRecord={"Losses"} value={player?.losses} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlayerProfile;

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 250,
  },

  text: {
    color: "#000000",
    fontSize: 18,
  },
  headerContainer: {
    backgroundColor: "#800000",
    // flexDirection: "row",
    // justifyContent: "space-around",
    marginBottom: 10,
  },
  headerText: {
    marginTop: 10,
    paddingHorizontal: 10,
    // backgroundColor: "black",
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
    color: "white",
  },
  boxText: {
    color: "#fff8dc",
  },
});
