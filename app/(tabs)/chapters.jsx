import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Thmage from "../../assets/images/3thmage.png";
import Img2 from "../../assets/images/secondeimage.png";
import { useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite/next";

const chapters = () => {
  const [chapters, setChapters] = useState("");
  const db = useSQLiteContext();

  useEffect(() => {
    db.withTransactionAsync(async () => {
      await getChaptersData();
    });
  }, [db]);

  async function getChaptersData() {
    const result = await db.getAllAsync(`SELECT * FROM chapters`);
    console.log(result);
  }
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-4">
        <View className="flex-row items-center mt-6"
          style={{ marginTop: Platform.OS === "ios" ? - 3 : - 40 }}
        >
          <View className="flex-1">
            <Text className="text-gray-400 text-xs font-aPro">
              Hi 👋, this is your guide for →
            </Text>
            <Text className="font-mBold text-xl">Rayman Raving Rabbids</Text>
          </View>
          <Image
            source={require("../../assets/images/firstimage.png")}
            className="h-10 w-10 rounded-full"
          />
        </View>
        <View className="pt-3">
          <Text className="text-xl font-mBold">Chapters</Text>
        </View>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="gap-y-4 pb-[90px]">
            <TouchableOpacity onPress={() => router.push("user.chapters")}>
              <ImageBackground
                source={require("../../assets/images/elementmap.jpeg")}
                className="w-full h-40 items-center justify-center rounded-xl overflow-hidden"
              >
                <Text className="text-white font-mMedium">Chapter1</Text>
                <Text className="text-white font-mBold">
                  Fancomic Rayman Nightmarish
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("user2.chapters")}>
              <ImageBackground
                source={require("../../assets/images/firstimage.png")}
                className="w-full h-40 items-center justify-center rounded-xl overflow-hidden"
              >
                <Text className="text-white font-mMedium">Chapter2</Text>
                <Text className="text-white font-mBold">
                  Fancomic Rayman Nightmarish
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("user3.chapters")}>
              <ImageBackground
                source={require("../../assets/images/ray.jpeg")}
                className="w-full h-40 items-center justify-center rounded-xl overflow-hidden"
              >
                <Text className="text-white font-mMedium">Chapter3</Text>
                <Text className="text-white font-mBold">
                  Fancomic Rayman Nightmarish
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("user4.chapters")}>
              <ImageBackground
                source={require("../../assets/images/welcome.jpeg")}
                className="w-full h-40 items-center justify-center rounded-xl overflow-hidden"
              >
                <Text className="text-white font-mMedium">Chapter4</Text>
                <Text className="text-white font-mBold">
                  Fancomic Rayman Nightmarish
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("user5.chapters")}>
              <ImageBackground
                source={Thmage}
                className="w-full h-40 items-center justify-center rounded-xl overflow-hidden"
              >
                <Text className="text-white font-mMedium">Chapter5</Text>
                <Text className="text-white font-mBold">
                  Fancomic Rayman Nightmarish
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("user.chapters")}>
              <ImageBackground
                source={Img2}
                className="w-full h-40 items-center justify-center rounded-xl overflow-hidden"
              >
                <Text className="text-white font-mMedium">Chapter6</Text>
                <Text className="text-white font-mBold">
                  Fancomic Rayman Nightmarish
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default chapters;
