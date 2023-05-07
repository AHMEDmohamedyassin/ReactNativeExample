import React from "react";
import { TouchableOpacity } from "react-native";
import { Image , View , Text } from "react-native";
import { StarIcon , MapPinIcon} from "react-native-heroicons/solid";
import {useNavigation} from '@react-navigation/native'
import ImageHook from "../Hooks/ImageHook";

export default CardComp = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')} className="bg-white rounded w-56 pb-2 m-2">
            <Image className="h-36 rounded" 
            source={{uri:ImageHook()}}/>
            <View className="px-2">
                <Text className="font-bold text-lg">Nado's</Text>
                <Text className="text-gray-500 my-1">
                    <StarIcon size={15} color="gray"/>
                    <Text className="text-xs px-2">4.8 offers</Text>
                </Text>
                <Text className="text-gray-500 my-1 text-xs">
                    <MapPinIcon size={15} color='gray'/>
                    <Text>Nearby . elshikh zayed street</Text>
                </Text>
            </View>
        </TouchableOpacity>
    )
};
