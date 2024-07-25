import { View, Image, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Card } from "react-native-elements";

const ubisoft = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 mt-4">
        <View className="p-4">
          <View className="">
            <View className="py-4">
              <Image
                source={require("../assets/images/usernav.jpeg")}
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
                source={require("../assets/images/secondeimage.png")}
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

export default ubisoft;
