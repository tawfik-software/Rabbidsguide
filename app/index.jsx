import {
  Image,
  Animated,
  StatusBar,
  Platform,
  Text,
  Button,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    MuseoModerno: require("../assets/fonts/MuseoModerno-Italic-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      router.push("about");
    }, 3000);
  });

  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/welcome.jpeg")}
        className="h-full w-full absolute"
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <View style={{ top: -490 }} className="flex items-center">
          <Text
            className="text-6xl text-white"
            style={{ fontFamily: "MuseoModerno" }}
          >
            Rabbids
          </Text>
          <Text
            className="text-6xl text-white"
            style={{ fontFamily: "MuseoModerno" }}
          >
            Guide
          </Text>
        </View>
        <View>
          <Progress.Bar
            progress={0.2}
            width={299}
            indeterminate={true}
            color="#ff8c00"
            borderColor="#696969"
            style={{ left: 40, top: -26 }}
          />
          <Text className="text-1xl text-white left-24">
            Please wait, we are loading...
          </Text>

          {/* <AntDesign name="rightcircleo" size={24} color="white" 
           style={{ position: 'absolute', right: 20, top: 18}}
           onPress={() => router.push('home')}
         /> */}
        </View>
      </LinearGradient>
    </View>
  );
};

export default index;
