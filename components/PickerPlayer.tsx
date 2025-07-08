import { Players } from "@/constants/Players";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const PickerPlayer = ({ position, playerRequired }) => {
  const playerList = Players;
  const defaultArr = [...Array(playerRequired)];
  const [pickerArray, setPickerArray] = useState(defaultArr);
  const [selectedValue, setSelectedValue] = useState("");

  const updatePickerArray = ({ val, index }) => {
    let newArr = [...pickerArray];
    newArr[index] = val;
    setPickerArray(newArr);
    console.log("newArr", newArr);
  };

  console.log("defaultArr", defaultArr);
  console.log("pickerArray", pickerArray);
  return (
    <View>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 17 }}>
        {position}
      </Text>
      {pickerArray.map((i, index) => {
        return (
          <Picker
            style={style.pickerStyles}
            dropdownIconColor={"red"}
            selectedValue={pickerArray[index]}
            onValueChange={(val, idx) => updatePickerArray({ val, index })}
            mode="dropdown"
          >
            <Picker.Item label="Pilih Nama Anda" value="" enabled={false} />
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
