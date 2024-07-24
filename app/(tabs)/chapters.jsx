import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const chapters = () => {
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
          Chapters
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default chapters;
