import { View, Text } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

const RootLayout = () => {
  // const [fontsLoaded, error] = useFonts({
  //   "MuseoModerno-Italic-VariableFont_wght": require("../assets/fonts/MuseoModerno-Italic-VariableFont_wght.ttf"),
  //   "MuseoModerno-VariableFont_wght": require("../assets/fonts/MuseoModerno-VariableFont_wght.ttf"),
  // });
  // useEffect(() => {
  //   if (error) throw error;
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, error]);
  // if (!fontsLoaded) {
  //   return null;
  // }
  // if (!fontsLoaded && !error) {
  //   return null;
  // }
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  );
};

export default RootLayout;
