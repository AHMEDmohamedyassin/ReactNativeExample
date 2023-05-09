import React , {useState} from "react";
import {
    ScrollView,
    Text ,
    TouchableOpacity,
    View ,
} from "react-native";
import ItemMenuComp  from "./ItemMenuComp";
import {useNavigation} from '@react-navigation/native'

export default MenuComp = () => {
    const navigation = useNavigation()
    return (
        <View className="mb-24">
            <ItemMenuComp />
            <ItemMenuComp />
            <ItemMenuComp />
            <ItemMenuComp />
            <ItemMenuComp />
        </View>
    );
};
