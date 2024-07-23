import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native'

import React, { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#FFFF', white: '#FFFF'};


const slides = [
  {
    id: '1',
    image: require('../assets/images/firstimage.png'),
    title: 'Get The Freshest Fruit Salad Combo',
    subtitle: 'We deliver the best and freshest fruit salad in town. Order for a combo today!!!',
  },
  {
    id: '2',
    image: require('../assets/images/secondeimage.png'),
    title: 'Get The Freshest Fruit Salad Combo',
    subtitle: 'We deliver the best and freshest fruit salad in town. Order for a combo today!!!',
  },
  {
    id: '3',
    image: require('../assets/images/3thmage.png'),
    title: 'Get The Freshest Fruit Salad Combo',
    subtitle: 'We deliver the best and freshest fruit salad in town. Order for a combo today!!!',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{
      width,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      <ImageBackground
        source={item?.image}
        style={{
          height: 394,
          width: 502,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <View style={{top: 25}}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const about = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  })

  const router = useRouter();

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#FFA451',
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => router.push('home')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={
                  {
                    borderColor: '#B8B8B8',
                    borderWidth: 1,
                    flex: 1,
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: '#B8B8B8',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                }
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  subtitle: {
    color: 'black',
    fontSize: 13,
    marginTop: 10,
    maxWidth: '75%',
    textAlign: 'center',
    lineHeight: 23,
    left: 30
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FFA451',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default about;