import { StatusBar } from "expo-status-bar";
import { Button, Text, View , Image , ScrollView , TouchableOpacity} from "react-native";
import { ChevronRightIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { ArrowSmallLeftIcon, MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import MenuComp from "../components/MenuComp";
import BasketButton from "../components/BasketButton";
import {useNavigation} from '@react-navigation/native'

export default function ProductScreen() {
    const navigation = useNavigation();
    return (
        <View className="relative">
            <ScrollView>
                <View className="relative h-36">
                    <Image source={{uri:"https://links.papareact.com/wru"}}
                    className="w-full h-full absolute top-0 left-0"/>
                    <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-7 left-5 rounded-full p-2 bg-gray-200">
                        <ArrowSmallLeftIcon size={20} color="#00ccbb"/>
                    </TouchableOpacity>
                </View>
                <View className="px-3 pt-2 bg-white">
                    <Text className="font-bold text-2xl mb-2">Waggama</Text>
                    <View className="flex-row">
                        <StarIcon size={15} color="gray" />
                        <Text className="text-xs text-gray-500 mx-2">5 Asian</Text>
                        <MapPinIcon size={15} color="gray" />
                        <Text className="text-xs text-gray-500 mx-2">Nearby . southbank street</Text>
                    </View>
                    <Text className="text-xs text-gray-500 text-justify py-2">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </Text>
                </View>
                <View className="bg-white">
                    <View className="h-[1px] bg-gray-400 my-2"></View>
                    <View className="flex-row p-3 items-center">
                        <QuestionMarkCircleIcon size={15} color='gray'/>
                        <Text className="mx-2 font-bold text-xs flex-1">Have a food Allergy?</Text>
                        <ChevronRightIcon size={15} color="#00ccbb"/>
                    </View>
                </View>
                <Text className="p-3 font-bold text-lg">Menu</Text>
                {/** menu component */}
                <MenuComp/>
            </ScrollView>
            <BasketButton/>
        </View>
    );
}
