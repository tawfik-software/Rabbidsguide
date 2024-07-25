import { View, Image, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements'

const user5ubisoft = () => {
  return (
    <SafeAreaView>
      <ScrollView>

      <View className="flex-1">
          <Image 
          source={require('../assets/images/3thmage.png')}
          className="h-44 w-96 rounded-lg top-3 left-1"
          />

          <View className="top-4 left-1">
          <Text className="text-xs leading-4 w-auto">
          Ubisoft, I say this respectfully: please use your amazing IPs in more creative 
          ways that appeal to your community rather than alienating your fanbase through,
           ways that appeal to your community rather, Ubisoft, I say this respectfully: please use your 
           amazing IPs in more creative ways that appeal to your community rather than alienating your fanbase through,
          ways that appeal to your community rather...
          </Text>
          <Text className="text-xs leading-4 w-auto">
            Ubisoft, I say this respectfully: please use your amazing IPs in more creative ways that appeal 
            to your community rather than alienating your fanbase through, ways that appeal to your community 
            rather, Ubisoft, I say this respectfully: please use your amazing IPs in more creative ways 
            that appeal to your community rather than alienating your fanbase through, 
            ways that appeal to your community rather...community rather than alienating your fanbase through, 
            ways that appeal to your community rather
          </Text>
          </View>

          <View className="flex">
        <View className="top-1">
          <Image 
          source={require('../assets/images/firstimage.png')}
          className="h-44 w-96 rounded-lg top-3 left-1"
          />
        </View>

        <View className="top-4 left-1">
          <Text className="text-xs leading-4 w-auto">
            Ubisoft, I say this respectfully: please use your amazing IPs in more creative ways that appeal
            to your community rather than alienating your fanbase through, ways that appeal to your community 
            rather, Ubisoft, I say this respectfully: please use your amazing IPs in more creative ways
            that appeal to your community rather than alienating your fanbase through,
          ways that appeal to your community rather, Ubisoft, I say this respectfully: 
            please use your amazing IPs in more creative ways that appeal to your community rather than alienating 
            your fanbase through, ways that appeal to your community rather, Ubisoft, 
            I say this respectfully: please use your amazing IPs in more creative ways
             that appeal to your community rather than alienating your fanbase through,
             ways that appeal to your community rather.
          </Text>
        </View>
        </View>
  
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default user5ubisoft