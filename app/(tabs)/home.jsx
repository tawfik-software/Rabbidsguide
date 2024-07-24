import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import about from "../about";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const home = () => {
  const router = useRouter();

  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // });

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-1 px-4">
        <View className="flex-row items-center mt-14">
          <View className="flex-1">
            <Text className="text-gray-400 text-xs font-aPro"> 
              Hi 👋, this is your guide for →
            </Text>
            <Text className="font-mBold text-xl">Rayman Raving Rabbids</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            className="ml-4"
            onPress={() => router.push('./profile')}
          >
          <Image
            source={require("../../assets/images/firstimage.png")}
            className="h-10 w-10 rounded-full"
          />
          </TouchableOpacity>
        </View>

        {/* Body */}
        <View className="mt-4">
          <Text className="text-xl font-mBold">Last articles</Text>
        </View>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="gap-y-1">

            {/* Element 1 */}
            <TouchableOpacity className="flex-row">
              <Image
                source={require("../../assets/images/secondeimage.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 220 }}
                /> 
              </View>
            </TouchableOpacity>
            
            {/* Element 2 */}

            <TouchableOpacity className="flex-row">
              <Image
                source={require("../../assets/images/bodyarticles.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 220 }}
                /> 
              </View>
            </TouchableOpacity>

            {/* Element 3 */}

            <TouchableOpacity className="flex-row">
              <Image
                source={require("../../assets/images/ray.jpeg")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 220 }}
                /> 
              </View>
            </TouchableOpacity>

            {/* Element 4 */}

            <TouchableOpacity className="flex-row">
              <Image
                source={require("../../assets/images/raymanbody.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 220 }}
                /> 
              </View>
            </TouchableOpacity>

            {/* Element 5 */}

            <TouchableOpacity className="flex-row">
              <Image
                source={require("../../assets/images/firstimage.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 220 }}
                /> 
              </View>
            </TouchableOpacity>

            {/* Element 6 */}
            
            <TouchableOpacity className="flex-row">
              <Image
                source={require("../../assets/images/3thmage.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 220 }}
                /> 
              </View>
            </TouchableOpacity>


          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default home;
