import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";

export default function CategoryCardComp (props)  {
    return (
        <TouchableOpacity className="bg-white relative w-20 h-20 mx-1 my-1 rounded">
            <Image source={{uri: props.image}} className="absolute top-0 left-0 w-full h-full" />
            <Text className="absolute bottom-0 w-full text-center text-white font-bold text-xl">{props.title}</Text>
        </TouchableOpacity>
    );
};
