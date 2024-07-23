import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Stack } from 'expo-router'

const _layout = () => {

  return (
    <Stack 
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

export default _layout