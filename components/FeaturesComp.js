import React from "react";
import { Text, View } from "react-native";
import FeaturedRowComp from "./FeaturedRowComp";
import CardsComp from './CardsComp'

export default function FeaturesComp () {
    return (
        <View>
            <FeaturedRowComp/>
            <CardsComp/>
        </View>
    );
};
