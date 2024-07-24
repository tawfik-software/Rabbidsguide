import { Text, View, SafeAreaView, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import * as Progress from "react-native-progress";
import { useRouter } from "expo-router";
import Welcome from "../assets/images/welcome.jpeg";
const index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("about");
    }, 3000);
  });

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground className="flex-1 " source={Welcome}>
        <View className="items-center mt-20 flex-1 w-screen ">
          <Text className="text-6xl text-white font-mRegular">Rabbids</Text>
          <Text className="text-6xl text-white font-mRegular">Guide</Text>
        </View>
        <View>
          <Progress.Bar
            progress={0.5}
            width={299}
            indeterminate={true}
            color="#ff8c00"
            borderColor="#696969"
            style={{ left: 40, top: -26 }}
          />
          <Text className="text-white text-center font-aPro text-lg mb-10">
            Please wait, we are loading...
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;
