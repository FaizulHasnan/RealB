import { Players } from "@/constants/Players";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const PickerPlayer = ({ position, playerRequired }) => {
  const playerList = Players;
  const defaultArr = [...Array(playerRequired)];
  const [pickerArray, setPickerArray] = useState(defaultArr);

  const updatePickerArray = ({ val, index }) => {
    let newArr = [...pickerArray];
    newArr[index] = val;
    setPickerArray(newArr);
    console.log("newArr", newArr); // ["6", undefined]
    console.log("index", index); // 0
    console.log("val", val); // 6
  };

  //   const positionName = (pos) => {
  //     if (pos === "GK") {
  //       return "GK - GOALKEEEPER";
  //     }
  //     if (pos === "CB") {
  //       return "CB - CENTRE BACK";
  //     }
  //     if (pos === "RB") {
  //       return "RB - RIGHT BACK";
  //     }
  //     if (pos === "LB") {
  //       return "LB - LEFT BACK";
  //     }
  //     if (pos === "DM") {
  //       return "DM - DEFENSIVE MIDFIELD";
  //     }
  //     if (pos === "CM") {
  //       return "CM - CENTRE MIDFIELD";
  //     }
  //     if (pos === "RW") {
  //       return "RW - RIGHT WING";
  //     }
  //     if (pos === "LW") {
  //       return "LW - LEFT WING";
  //     }
  //     if (pos === "ST") {
  //       return "ST - STRIKER";
  //     }

  //     return "Error";
  //   };

  return (
    <View>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 17 }}>
        {position}
      </Text>

      {pickerArray.map((i, index) => {
        console.log("Dekat Picker", pickerArray[index]);
        return (
          <Picker
            style={style.pickerStyles}
            dropdownIconColor={"red"}
            selectedValue={pickerArray[index]}
            onValueChange={(val, idx) => updatePickerArray({ val, index })}
            mode="dropdown"
          >
            {playerList.map((playerMap) => (
              <Picker.Item label={playerMap.fullname} value={playerMap.id} />
            ))}
          </Picker>
        );
      })}
    </View>
  );
};
const style = StyleSheet.create({
  pickerStyles: {
    backgroundColor: "#d3d3d3",
    color: "black",
    marginHorizontal: 5,
  },
});

export default PickerPlayer;
