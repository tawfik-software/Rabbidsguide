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
import { AntDesign } from '@expo/vector-icons';

const home = () => {
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // });

  return (
    <SafeAreaView className="pt-5">
    {/* Header */}
    <View
      className="flex-row pb-3 items-center mx-4 space-x-2 px-4">

      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">
          Hi 👋, this is your guide for →
        </Text>
        <Text className="font-bold text-xl">
          Rayman Raving Rabbids
        </Text>
      </View>
      <Image 
        source={require('../../assets/images/firstimage.png')}
        className="h-7 w-7 p-4 rounded-full"
      />
      </View>
    
    {/* Body */}

    <ScrollView
    contentContainerStyle={{
      paddingBottom: 100,
    }}>
     
     <View className="pt-5">
     <TouchableOpacity className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
     <Image 
        source={require('../../assets/images/secondeimage.png')}
        className="h-28 w-28 p-4 rounded-xl"
      />
      <View>
        <Text className="text-orange-500 text-xs">Fancomic Rayman Nightmarish</Text>
        <Text className="text-xs mt-32">Ubisoft, I say this respectfully: please use your amazing IPs in more 
          creative ways that appeal to your community rather than alienating your 
          fanbase through, ways that appeal to your community rather...
        </Text>
      </View>
     </TouchableOpacity>
     </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default home;
