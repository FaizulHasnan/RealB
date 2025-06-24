import PlayerList from "@/components/PlayerList";
import { Players } from "@/constants/Players";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  
  // useEffect(() => {
  //   // Fetch data from Supabase when the component mounts
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try{
  //     const { data, error, status} = await supabase.from('users').select('*');
  //     if(error && status !== 406) {
  //       throw error;
  //     }
  //     if(data) {
  //       console.log('Data fetched successfully:', data);
  //     }
  //   }catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

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
        Real B Players
      </Text>
      <PlayerList
        players={Players}
        onPressItem={(itemId: string) =>
          router.push({
            pathname: "/Details",
            params: {
              itemId,
            },
          })
        }
      />
      {/* {selectedPlayer && <PlayerProfile player={selectedPlayer} />} */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
