import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";

const profile = () => {
  return (
    <SafeAreaView>
      <View className="items-center mt-7 justify-center">
        <Image
          source={require("../../assets/images/firstimage.png")}
          className="h-32 w-32 rounded-full"
        />

        <Text className="font-mRegular text-sm p-5">Rayman Raving Rabbids</Text>

        <View className="px-4">
          <View className="mb-8">
            <Text className="text-lg absolute right-8 font-mRegular mr-64">Support us</Text>
          </View>
          <TouchableOpacity className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-4">
            <View className="flex-row items-center gap-x-2">
              <Entypo
                name="map"
                size={24}
                color="black"
                style={{ right: 15 }}
              />
              <Text className="text-black text-md font-mRegular text-lg">
                Rate Us
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-4">
            <View className="flex-row items-center gap-x-2">
              <Entypo
                name="map"
                size={24}
                color="black"
                style={{ right: 15 }}
              />
              <Text className="text-black text-md font-mRegular text-lg">
                Rate Us
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-4">
            <View className="flex-row items-center gap-x-2">
              <Entypo
                name="map"
                size={24}
                color="black"
                style={{ right: 15 }}
              />
              <Text className="text-black text-md font-mRegular text-lg">
                Rate Us
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <View className="mb-8 top-2">
            <Text className="text-lg absolute right-8 font-mRegular mr-56">
              About the app
            </Text>
          </View>
          <TouchableOpacity className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-4">
            <View className="flex-row items-center gap-x-2">
              <Entypo
                name="map"
                size={24}
                color="black"
                style={{ right: 15 }}
              />
              <Text className="text-black text-md font-mRegular text-lg">
                Rate Us
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-4">
            <View className="flex-row items-center gap-x-2">
              <Entypo
                name="map"
                size={24}
                color="black"
                style={{ right: 15 }}
              />
              <Text className="text-black text-md font-mRegular text-lg">
                Rate Us
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profile;
