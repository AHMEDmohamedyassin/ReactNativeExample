import React from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCardComp from './CategoryCardComp'
import ImageHook from "../Hooks/ImageHook";

export default function  CategoriesComp  ()  {
    return( 
        <View>
            <ScrollView horizontal className="px-1">
                <CategoryCardComp image={ImageHook()} title='card1'/>
                <CategoryCardComp image={ImageHook()} title='card2'/>
                <CategoryCardComp image={ImageHook()} title='card3'/>
                <CategoryCardComp image={ImageHook()} title='card3'/>
                <CategoryCardComp image={ImageHook()} title='card3'/>
            </ScrollView>
        </View>
    );
};
