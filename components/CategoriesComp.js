import React from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCardComp from './CategoryCardComp'

export default function  CategoriesComp  ()  {
    return( 
        <View>
            <ScrollView horizontal className="px-1">
                <CategoryCardComp image='https://links.papareact.com/wru' title='card1'/>
                <CategoryCardComp image='https://links.papareact.com/wru' title='card2'/>
                <CategoryCardComp image='https://links.papareact.com/wru' title='card3'/>
                <CategoryCardComp image='https://links.papareact.com/wru' title='card3'/>
                <CategoryCardComp image='https://links.papareact.com/wru' title='card3'/>
            </ScrollView>
        </View>
    );
};
