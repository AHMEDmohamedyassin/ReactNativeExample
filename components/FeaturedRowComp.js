import React from 'react'
import { Text, View } from 'react-native'
import {ArrowSmallRightIcon} from 'react-native-heroicons/solid'

export default function FeaturedRowComp  ()  {
  return (
    <View className="flex-row items-center p-2 ">
        <View className="flex-1">
            <Text className="font-bold text-[18px]">Offer near you</Text>
            <Text className="text-gray-500 text-xs">why not support yout local resturant tonight</Text>
        </View>
        <ArrowSmallRightIcon size={25} color="#00ccbb" />
    </View>
  )
}
