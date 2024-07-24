import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  MaterialIcons,
  Octicons,
  FontAwesome5,
} from "@expo/vector-icons";
const savedArticles = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-1 px-4">
        <View className="flex-row items-center mt-14">
          <View className="flex-1">
            <Text className="text-gray-400 text-sm font-aPro">
              Hi 👋, this is your guide for →
            </Text>
            <Text className="font-mBold text-xl">Rayman Raving Rabbids</Text>
          </View>
          <Image
            source={require("../../assets/images/firstimage.png")}
            className="h-10 w-10 rounded-full"
          />
        </View>

        {/* Body */}
        <View className="mt-4 mb-2">
          <Text className="text-xl font-mBold">Saved articles</Text>
        </View>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="gap-y-3 pb-[90px]">
            <View className="flex-row">
              <TouchableOpacity className="relative w-[45%]">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />
                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative w-[45%] ml-6">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />

                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <TouchableOpacity className="relative w-[45%]">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />
                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative w-[45%] ml-6">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />

                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <TouchableOpacity className="relative w-[45%]">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />
                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative w-[45%] ml-6">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />

                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <TouchableOpacity className="relative w-[45%]">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />
                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative w-[45%] ml-6">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />

                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <TouchableOpacity className="relative w-[45%]">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />
                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative w-[45%] ml-6">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />

                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <TouchableOpacity className="relative w-[45%]">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />
                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative w-[45%] ml-6">
                <Image
                  source={require("../../assets/images/secondeimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />

                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Ionicons name="save" size={20} color={"#f59e4e"} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default savedArticles;
