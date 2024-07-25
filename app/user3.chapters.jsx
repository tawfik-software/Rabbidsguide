import { View, Image, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';


const user3chapters = () => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
            <View>
              <ImageBackground
                source={require('../assets/images/ray.jpeg')}
                className="w-full h-40 items-center justify-center rounded-sm overflow-hidden"
              >
              <Ionicons name="close-outline" size={26} color="white" 
                style={{ position: "absolute", top: -2, right: 8 }}
                onPress={() => navigation.goBack()}
              />
                <Text className="text-white font-mMedium">Chapter1</Text>
                <Text className="text-white font-mBold">
                  Fancomic Rayman Nightmarish
                </Text>
              </ImageBackground>
            </View>

            <ScrollView className="flex-1 top-3" showsVerticalScrollIndicator={false}>
          <View className="gap-y-1">

            {/* Element 1 */}
            <TouchableOpacity className="flex-row"
              onPress={() => router.push('ubisoft')}
            >
              <Image
                source={require("../assets/images/secondeimage.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 260 }}
                /> 
              </View>
            </TouchableOpacity>
            
            {/* Element 2 */}

            <TouchableOpacity className="flex-row">
              <Image
                source={require("../assets/images/bodyarticles.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 260 }}
                /> 
              </View>
            </TouchableOpacity>

            {/* Element 3 */}

            <TouchableOpacity className="flex-row">
              <Image
                source={require("../assets/images/ray.jpeg")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 260 }}
                /> 
              </View>
            </TouchableOpacity>

            {/* Element 4 */}

            <TouchableOpacity className="flex-row">
              <Image
                source={require("../assets/images/raymanbody.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 260 }}
                /> 
              </View>
            </TouchableOpacity>

            {/* Element 5 */}

            <TouchableOpacity className="flex-row">
              <Image
                source={require("../assets/images/firstimage.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 260 }}
                /> 
              </View>
            </TouchableOpacity>

            {/* Element 6 */}
            
            <TouchableOpacity className="flex-row">
              <Image
                source={require("../assets/images/3thmage.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{ position: "absolute", bottom: 0, left: 260 }}
                /> 
              </View>
            </TouchableOpacity>


          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default user3chapters;