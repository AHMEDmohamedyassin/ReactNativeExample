import React from "react";
import { TouchableOpacity } from "react-native";
import { 
    Image,
    Text, 
    View, 
} from "react-native";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";

export const ItemMenuComp = () => {
    return (
        <View className="border-b-[0.5px] border-solid border-gray-100 p-3 bg-white ">
            <View className="flex-row items-center">
                <View className="flex-1">
                    <Text className="text-lg">chicken Ramadan</Text>
                    <Text className="text-gray-500 text-xs my-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    <Text className="text-gray-500 text-sm">L.E 50</Text>
                </View>
                <Image className="h-16 w-16 rounded-full ml-4 bg-black"
                    source={{uri:"https://links.papareact.com/wru"}}
                />
            </View>
            <View className="flex-row items-center py-2">
                <TouchableOpacity className="bg-[#00ccbb] rounded-full p-1">
                    <PlusIcon size={20} color="white"/>
                </TouchableOpacity>
                <Text className="mx-2 text-gray-500">10</Text>
                <TouchableOpacity className="bg-[#00ccbb] rounded-full p-1">
                    <MinusIcon size={20} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};
