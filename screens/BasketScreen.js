import React from "react";
import {
    View , Text, TouchableOpacity, ScrollView, Image
}from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { XMarkIcon } from "react-native-heroicons/solid";

export default BasketScreen = () => {
    const navigation = useNavigation()
    return (
        <ScrollView className="bg-gray-300">
            <View className="bg-white flex-row items-center p-3">
                <View className="flex-1 items-center">
                    <Text className="font-bold text-xl">Basket</Text>
                    <Text className="text-sm text-gray-500">wagamama</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.goBack()} className="p-2 bg-maincolor rounded-full">
                    <XMarkIcon size={25} color="white" />
                </TouchableOpacity>
            </View>
            <View className="bg-white my-5 p-2 flex-row items-center">
                <View className="flex-row flex-1 items-center">
                    <Image className="w-14 h-14 rounded-full" source={{uri:"https://links.papareact.com/wru"}} />
                    <Text className="mx-2">Delivery in 30 - 50 minutes</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-sky-500">change</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}