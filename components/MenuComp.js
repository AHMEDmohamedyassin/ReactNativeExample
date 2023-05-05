import React from "react";
import {
    ScrollView,
    Text ,
    View ,
} from "react-native";
import { ItemMenuComp } from "./ItemMenuComp";

export default MenuComp = () => {
    return (
        <ScrollView>
            <ItemMenuComp />
            <ItemMenuComp />
            <ItemMenuComp />
            <ItemMenuComp />
            <ItemMenuComp />
        </ScrollView>
    );
};
