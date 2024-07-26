import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabIcon from "../../components/ui/TapIcon";
import Bookmark from "../../components/svg/icons/bookmark";
import Home from "../../components/svg/icons/home";
import {
  Ionicons,
  MaterialIcons,
  Octicons,
  FontAwesome5,
  Entypo,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Layout = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#bdbcbc",
          tabBarStyle: {
            position: "absolute",
            height: 80,
            ...(Platform.OS === "ios" ? { paddingBottom: 20 } : {}),
          },
          tabBarBackground: () => {
            <View
              style={{ ...StyleSheet.absoluteFillObject, overflow: "hidden" }}
            >
              <BlurView
                intensity={80}
                blurType="regular"
                style={{
                  backgroundColor: "transparent",
                  flex: 1,
                }}
              />
            </View>;
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<Home color={color} />}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chapters"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<Entypo name="map" size={24} color={color} />}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="savedArticles"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={
                  // <MaterialCommunityIcons
                  //   name="bookmark"
                  //   size={24}
                  //   color={color}
                  // />
                  <Bookmark color={color} />
                }
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<FontAwesome5 name="user" size={24} color={color} />}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default Layout;