import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabIcon from "../../components/ui/TapIcon";
import { Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#bdbcbc",
          tabBarStyle: {
            height: 80,
            position: "absolute",
            shadowColor: "rgba(47,64,85,1)",
            shadowRadius: 12,
            shadowOffset: {
              height: 4,
              width: 0,
            },
            shadowOpacity: 0.12,
          },
          tabBarBackground: () => (
            <BlurView
              blurType="regular"
              blurAmount={80}
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            />
          ),
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<Octicons name="home" size={24} color={color} />}
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
                icon={<Octicons name="home" size={24} color={color} />}
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
                icon={<Octicons name="home" size={24} color={color} />}
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
                icon={<Octicons name="home" size={24} color={color} />}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    </GestureHandlerRootView>
  );
};

export default Layout;
