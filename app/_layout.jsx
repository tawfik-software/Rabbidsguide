import { View, Text } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "MuseoModerno-Thin": require("../assets/fonts/MuseoModerno-Thin.ttf"),
    "MuseoModerno-ExtraLight": require("../assets/fonts/MuseoModerno-ExtraLight.ttf"),
    "MuseoModerno-Light": require("../assets/fonts/MuseoModerno-Light.ttf"),
    "MuseoModerno-Medium": require("../assets/fonts/MuseoModerno-Medium.ttf"),
    "MuseoModerno-Regular": require("../assets/fonts/MuseoModerno-Regular.ttf"),
    "MuseoModerno-SemiBold": require("../assets/fonts/MuseoModerno-SemiBold.ttf"),
    "MuseoModerno-Bold": require("../assets/fonts/MuseoModerno-Bold.ttf"),
    "MuseoModerno-ExtraBold": require("../assets/fonts/MuseoModerno-ExtraBold.ttf"),
    "MuseoModerno-Black": require("../assets/fonts/MuseoModerno-Black.ttf"),
    "Abel-Pro": require("../assets/fonts/Abel-Pro.otf"),
    "Abel-Pro-Bold": require("../assets/fonts/Abel-Pro-Bold.otf"),
  });
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  if (!fontsLoaded) {
    return null;
  }
  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="about" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  );
};

export default RootLayout;
