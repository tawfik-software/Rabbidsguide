import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabIcon from "../../components/ui/TapIcon";
import {
  Ionicons,
  MaterialIcons,
  Octicons,
  FontAwesome5,
  Entypo, 
  Fontisto,
} from "@expo/vector-icons";
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
            position: "absolute",
            height: 80,
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
                icon={
                  <Entypo name="map" size={24} color={color} />
                }
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
                icon={<Fontisto name="favorite" size={24} color={color} />}
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
