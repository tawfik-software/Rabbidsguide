import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { Entypo, AntDesign} from '@expo/vector-icons';

const profile = () => {
  return (
    <SafeAreaView>
      <View
        className="items-center mt-7 justify-center"
      >
      <Image 
        source={require('../../assets/images/firstimage.png')}
        className="h-32 w-32 rounded-full"
        />

          <Text className="font-mRegular text-sm p-5">Rayman Raving Rabbids</Text>

          <View className="mt-4">
          <Text className="text-xl font-mRegular right-32">Support us</Text>
          </View>

        <View>
        <TouchableOpacity className="flex-row items-center space-x-2 pb-2 mx-14 w-screen">
        <View className="flex-row ml-2 flex-1 space-x-2 bg-[#f0eded] rounded-2xl p-3">
              <View className="left-7 flex-row">
                <Entypo name="map" size={24} color="black" style={{right: 15}} />
                <Text className="text-black text-md font-mRegular text-lg">
                  Rate Us
                </Text>
              </View>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "center", bottom: 0, left: 250 }}
                /> 
              </View>
        </TouchableOpacity>
        </View>

        {/* 2 */}

        <View>
        <TouchableOpacity className="flex-row items-center space-x-2 pb-2 mx-14 w-screen">
        <View className="flex-row ml-2 flex-1 space-x-2 bg-[#f0eded] rounded-2xl p-3">
              <View className="left-3 flex-row">
                <Entypo name="map" size={24} color="black" style={{right: 15}} />
                <Text className="text-black text-md font-mRegular text-lg">
                  Contact Us  Share with friends
                </Text>
              </View>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "center", bottom: 0, left: 250 }}
                /> 
              </View>
        </TouchableOpacity>
        </View>
        
        {/* 3 */}

        <View>
        <TouchableOpacity className="flex-row items-center space-x-2 pb-2 mx-14 w-screen">
        <View className="flex-row ml-2 flex-1 space-x-2 bg-[#f0eded] rounded-2xl p-3">
              <View className="left-7 flex-row">
                <Entypo name="map" size={24} color="black" style={{right: 15}} />
                <Text className="text-black text-md font-mRegular text-lg">
                  Share with friends
                </Text>
              </View>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "center", bottom: 0, left: 250 }}
                /> 
              </View>
        </TouchableOpacity>
        </View>

        <View className="mt-11">
          <Text className="text-xl font-mRegular right-32">About the app</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity className="flex-row items-center space-x-2 pb-2 mx-14 w-screen">
        <View className="flex-row ml-2 flex-1 space-x-2 bg-[#f0eded] rounded-2xl p-3">
              <View className="left-7 flex-row">
                <Entypo name="map" size={24} color="black" style={{right: 15}} />
                <Text className="text-black text-md font-mRegular text-lg">
                About us
                </Text>
              </View>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "center", bottom: 0, left: 250 }}
                /> 
              </View>
        </TouchableOpacity>
        </View>

        {/* 2 */}

        <View>
        <TouchableOpacity className="flex-row items-center space-x-2 pb-2 mx-14 w-screen">
        <View className="flex-row ml-2 flex-1 space-x-2 bg-[#f0eded] rounded-2xl p-3">
              <View className="left-3 flex-row">
                <Entypo name="map" size={24} color="black" style={{right: 15}} />
                <Text className="text-black text-md font-mRegular text-lg">
                Terms and Conditions
                </Text>
              </View>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "center", bottom: 0, left: 250 }}
                /> 
              </View>
        </TouchableOpacity>
        </View>
        
        {/* 3 */}

        <View>
        <TouchableOpacity className="flex-row items-center space-x-2 pb-2 mx-14 w-screen">
        <View className="flex-row ml-2 flex-1 space-x-2 bg-[#f0eded] rounded-2xl p-3">
              <View className="left-7 flex-row">
                <Entypo name="map" size={24} color="black" style={{right: 15}} />
                <Text className="text-black text-md font-mRegular text-lg">
                Privacy Policy
                </Text>
              </View>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "center", bottom: 0, left: 250 }}
                /> 
              </View>
        </TouchableOpacity>
        </View>

    </SafeAreaView>
  );
};

export default profile;
