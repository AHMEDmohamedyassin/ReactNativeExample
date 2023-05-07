import React, { useEffect, useMemo, useState } from "react";
import { TouchableOpacity } from "react-native";
import { 
    Image,
    Text, 
    View, 
} from "react-native";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";
import ImageHook from "../Hooks/ImageHook";

export const ItemMenuComp = () => {
    const [getDisplay , setDisplay] = useState('none')
    const [getCount , setCount] = useState(0)
    return (
        <TouchableOpacity onPress={() => getDisplay == 'none' ? setDisplay('flex') : setDisplay('none') } className="border-b-[0.5px] border-solid border-gray-50 p-3 bg-white ">
            <View className="flex-row items-center">
                <View className="flex-1">
                    <Text className="text-lg">chicken Ramadan</Text>
                    <Text className="text-gray-500 text-xs my-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    <Text className="text-gray-500 text-sm">L.E 50</Text>
                </View>
                <Image className="h-16 w-16 rounded-full ml-4 bg-black"
                    source={{uri:ImageHook()}}
                />
            </View>
            <View className="flex-row items-center py-2" style={{display: getCount? 'flex' : getDisplay}}>
                <TouchableOpacity onPress={() => getCount ? setCount(getCount - 1 ) : null} className="bg-[#00ccbb] rounded-full p-1"  style={{backgroundColor: getCount?'#00ccbb' : 'gray'}}>
                    <MinusIcon size={20} color="white"/>
                </TouchableOpacity>
                <Text className="mx-2 text-gray-500">{getCount}</Text>
                <TouchableOpacity onPress={() => setCount(getCount + 1) } className="bg-[#00ccbb] rounded-full p-1">
                    <PlusIcon size={20} color="white"/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};
