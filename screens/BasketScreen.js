import React from "react";
import {
    View , Text, TouchableOpacity, ScrollView, Image ,SafeAreaView ,StatusBar
}from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { XMarkIcon } from "react-native-heroicons/solid";
import BasketCards from "../components/BasketCards";
import BasketCheckout from "../components/BasketCheckout";
import ImageHook from '../Hooks/ImageHook'

export default BasketScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView className="bg-gray-200 flex-1">
            <View className="bg-white flex-row items-center p-3 relative">
                <View className="flex-1 items-center">
                    <Text className="font-bold text-xl">Basket</Text>
                    <Text className="text-sm text-gray-500">wagamama</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.goBack()} className="p-2 bg-[#00ccbb] rounded-full absolute right-3">
                    <XMarkIcon size={25} color="white" />
                </TouchableOpacity>
            </View>
            <View className="bg-white my-5 p-2 flex-row items-center">
                <View className="flex-row flex-1 items-center">
                    <Image className="w-14 h-14 rounded-full" source={{uri:ImageHook()}} />
                    <Text className="mx-2">Delivery in 30 - 50 minutes</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-[#00ccbb]">change</Text>
                </TouchableOpacity>
            </View>
            {/** Basket cards */}
            <BasketCards/>
            {/** basket checkout */}
            <BasketCheckout/>

        </SafeAreaView>
    );
}