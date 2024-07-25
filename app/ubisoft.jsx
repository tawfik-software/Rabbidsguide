import { View, Image, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements'

const ubisoft = () => {
  return (
      <View className="flex-1">
          <Image 
          source={require('../assets/images/usernav.jpeg')}
          className="h-44 w-96 rounded-lg top-3 left-3"
          />

          <View className="top-4 left-1">
          <Text className="text-center">
          Ubisoft, I say this respectfully: please use your amazing IPs in more creative 
          ways that appeal to your community rather than alienating your fanbase through,
           ways that appeal to your community rather, Ubisoft, I say this respectfully: please use your 
           amazing IPs in more creative ways that appeal to your community rather than alienating your fanbase through,
          ways that appeal to your community rather...
          </Text>
          <Text>Ubisoft, I say this respectfully: please use your amazing IPs in more creative ways that appeal 
            to your community rather than alienating your fanbase through, ways that appeal to your community 
            rather, Ubisoft, I say this respectfully: please use your amazing IPs in more creative ways 
            that appeal to your community rather than alienating your fanbase through, 
            ways that appeal to your community rather...community rather than alienating your fanbase through, 
            ways that appeal to your community rather
          </Text>
          </View>

          <View className="flex">

          <Image 
          source={require('../assets/images/secondeimage.png')}
          className="h-44 w-96 rounded-lg top-3 left-3"
          />

        <View className="top-4 left-1">
            <Text>
            Ubisoft, I say this respectfully: please use your amazing IPs in more creative ways that appeal
             to your community rather than alienating your fanbase through, ways that appeal to your community 
             rather, Ubisoft, I say this respectfully: please use your amazing IPs in more creative ways
              that appeal to your community rather than alienating your fanbase through,
               ways that appeal to your community rather, Ubisoft, I say this respectfully: 
               please use your amazing IPs in more creative ways that appeal to your community rather than alienating 
               your fanbase through, ways that appeal to your community rather, Ubisoft, I say this respectfully: 
               please use your amazing IPs in more creative ways that appeal to your community rather than alienating your fanbase through,
                ways that appeal to your community rather.
            </Text>
        </View>
          </View>
  
      </View>
  )
}

export default ubisoft