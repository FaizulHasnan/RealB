import { supabase } from "@/lib/supabase";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Button, View } from "react-native";

const UploadImage = ({ setImage, userId }) => {
  // Pick & upload image

  const pickImage = async () => {
    {
      const permissionResult =
        await ImagePicker.requestCameraPermissionsAsync();
      if (!permissionResult.granted) {
        alert("Sorry, we need camera roll permissions to make this work!");
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        uploadToSupabase(result.assets[0].uri);
        setImage(result.assets[0].uri);
      }
    }
    // Upload image from local into global supabase storage & update url into database

    async function uploadToSupabase(uri) {
      const response = await fetch(uri);
      // const blob = await response.blob();
      const fileExt = uri.split(".").pop();
      const fileName = `image-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;
      console.log(response);

      // const abc = await supabase.storage.listBuckets();
      // console.log("abc", abc);

      const imageFile = result.assets[0].uri;
      const { data, error } = await supabase.storage
        .from("realbucket")
        .upload(`${filePath}`, imageFile, {
          contentType: "image/png",
          upsert: true,
        });

      if (error) {
        console.error("Upload error:", error);
      } else {
        console.log("Uploaded:", data);

        // Get public URL
        const { publicUrl } = await supabase.storage
          .from("realbucket")
          .getPublicUrl(filePath).data;

        console.log("Public URL:", publicUrl);

        const { error } = await supabase
          .from("players")
          .update({ imageUrl: publicUrl })
          .eq("userId", userId);
        if (error) {
          console.error("Upload error:", error);
        }
      }
    }

    return (
      <View style={{}}>
        <Button
          color="white"
          title="Upload Profile Photo"
          onPress={pickImage}
        />
      </View>
    );
  };
};

export default UploadImage;
