import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import about from "../about";
import { useNavigation } from "@react-navigation/native";

const home = () => {
  const navigation = useNavigation();
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        className="bg-[#7c7c7c00]"
      >
        <Text style={{ justifyContent: "center", alignItems: "center" }}>
          home one
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default home;
