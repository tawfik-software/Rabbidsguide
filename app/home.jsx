import { View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import React, { useEffect, useLayoutEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import about from './about';
import { useNavigation } from '@react-navigation/native';

const home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  })
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{justifyContent: 'center', alignItems: 'center'}}>home</Text>
    </View>
  )
}

export default home