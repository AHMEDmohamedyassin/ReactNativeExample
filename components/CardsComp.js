import React from "react";
import { ScrollView } from "react-native";
import CardComp from "./CardComp";

export default CardsComp = () => {
    return (
        <ScrollView horizontal>
            <CardComp />
            <CardComp />
            <CardComp />
        </ScrollView>
    );
};
