import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const user2ubisoft = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className="flex-row items-center p-4 bg-white"
        style={{ marginTop: Platform.OS === "android" ? 30 : 0 }}
      >
        <Text className="flex-1 font-mRegular text-lg font-bold text-center right-20">
          Rayman Raving Rabbids
        </Text>
        <Ionicons
          name="close-outline"
          size={26}
          color="black"
          style={{ position: "absolute", top: 18, right: 16 }}
          onPress={() => navigation.goBack()}
        />
        <View className="absolute bottom-0 left-0 right-0 h-px bg-gray-400" />
      </View>
      <ScrollView className="flex-1 mt-4">
        <View className="p-4">
          <View className="">
            <View className="py-4">
              <Image
                source={require("../assets/images/ray.jpeg")}
                className="h-44 w-full rounded-lg py-4"
              />
            </View>
            <Text className="text-xs leading-4 w-auto">
              Ubisoft, I say this respectfully: please use your amazing IPs in
              more creative ways that appeal to your community rather than
              alienating your fanbase through, ways that appeal to your
              community rather, Ubisoft, I say this respectfully: please use
              your amazing IPs in more creative ways that appeal to your
              community rather than alienating your fanbase through, ways that
              appeal to your community rather...
            </Text>
            <Text className="text-xs leading-4 w-auto">
              Ubisoft, I say this respectfully: please use your amazing IPs in
              more creative ways that appeal to your community rather than
              alienating your fanbase through, ways that appeal to your
              community rather, Ubisoft, I say this respectfully: please use
              your amazing IPs in more creative ways that appeal to your
              community rather than alienating your fanbase through, ways that
              appeal to your community rather...community rather than alienating
              your fanbase through, ways that appeal to your community rather
            </Text>
          </View>
          <View>
            <View className="py-4">
              <Image
                source={require("../assets/images/bodyarticles.png")}
                className="h-44 w-full rounded-lg "
              />
            </View>

            <View className="">
              <Text className="text-xs leading-4 w-auto">
                Ubisoft, I say this respectfully: please use your amazing IPs in
                more creative ways that appeal to your community rather than
                alienating your fanbase through, ways that appeal to your
                community rather, Ubisoft, I say this respectfully: please use
                your amazing IPs in more creative ways that appeal to your
                community rather than alienating your fanbase through, ways that
                appeal to your community rather, Ubisoft, I say this
                respectfully: please use your amazing IPs in more creative ways
                that appeal to your community rather than alienating your
                fanbase through, ways that appeal to your community rather,
                Ubisoft, I say this respectfully: please use your amazing IPs in
                more creative ways that appeal to your community rather than
                alienating your fanbase through, ways that appeal to your
                community rather.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default user2ubisoft;
