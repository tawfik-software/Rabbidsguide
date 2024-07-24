import { View, Text } from "react-native";
import React from "react";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
      className={`items-center justify-center ${
        focused && "bg-[#FFA451]"
      } px-5 py-1 rounded-3xl`}
    >
      {icon}
    </View>
  );
};

export default TabIcon;
