import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Platform,
} from "react-native";
import React, { useState, useRef } from "react";
import { useRouter, useNavigation } from "expo-router";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#FFFF", white: "#FFFF" };

const slides = [
  {
    id: "1",
    image: require("../assets/images/firstimage.png"),
    title: "Get The Freshest Fruit Salad Combo",
    subtitle:
      "We deliver the best and freshest fruit salad in town. Order for a combo today!!!",
  },
  {
    id: "2",
    image: require("../assets/images/secondeimage.png"),
    title: "Get The Freshest Fruit Salad Combo",
    subtitle:
      "We deliver the best and freshest fruit salad in town. Order for a combo today!!!",
  },
  {
    id: "3",
    image: require("../assets/images/3thmage.png"),
    title: "Get The Freshest Fruit Salad Combo",
    subtitle:
      "We deliver the best and freshest fruit salad in town. Order for a combo today!!!",
  },
];

const Slide = ({ item }) => {
  return (
    <View
      style={{
        width,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={item?.image}
        className="w-screen h-[450px] justify-center items-center"
      />
      <View style={{ top: 25 }}>
        <Text
          style={styles.title}
          className="font-aProBold text-xl text-center"
        >
          {item?.title}
        </Text>
        <Text
          style={styles.subtitle}
          className="font-aPro text-lg text-center px-4 mt-4"
        >
          {item?.subtitle}
        </Text>
      </View>
    </View>
  );
};

const about = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.15,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: "#FFA451",
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => router.push("(tabs)/home")}
              >
                <Text className="font-aPro text-white text-lg">
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  borderColor: "#B8B8B8",
                  borderWidth: 1,
                  flex: 1,
                  height: 50,
                  borderRadius: 5,
                  backgroundColor: "#B8B8B8",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={skip}
              >
                <Text className="font-aPro text-white text-lg">SKIP</Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Text className="font-aPro text-white text-lg">NEXT</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        data={slides}
        renderItem={({ item }) => <Slide item={item} />}
        scrollEnabled={true} // Enable scrolling
        showsVerticalScrollIndicator={false} // Disable vertical scroll indicators
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#FFA451",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default about;
