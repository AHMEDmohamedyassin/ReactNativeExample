import React from "react";
import {View , Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from 'react-native-progress'
import MapView from 'react-native-maps';
import {useNavigation} from '@react-navigation/native'
import ImageHook from '../Hooks/ImageHook'

export default DeliveryScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 justify-between bg-[#00ccbb] relative">
            {/**header */}
            <View className="flex-row items-center justify-between p-3 mt-5">
                <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')}>
                    <XMarkIcon size={25} color="white"/>
                </TouchableOpacity>
                <Text className="text-white">order help?</Text>
            </View>
            {/** details */}
            <View className="bg-white flex-row items-start mt-8 mx-auto w-72 rounded p-3 pt-4 absolute top-12 inset-x-10 z-10">
                <View className="gap-2">
                    <Text className="text-gray-500">Estimated Arrival</Text>
                    <Text className="font-bold text-2xl">45 - 55 Minutes</Text>
                    <Progress.Bar size={35} color="#00ccbb" indeterminate={true} />
                    <Text className="text-gray-500 text-xs">your order at Nado's is being prepared</Text>
                </View>
                <Image className="h-16 w-16 rounded-full" source={{uri : ImageHook()}} />
            </View>
            <View>
                {/** map */}
                <View className="h-[420px] w-full">
                    <MapView className="w-full h-full"
                        initialRegion={{
                            latitude:30.039177,
                            longitude:30.973989,
                            longitudeDelta : 0.005,
                            latitudeDelta : 0.005,
                        }}
                    />
                </View>
                {/**lower part */}
                <View className="flex-row items-center p-3 bg-white">
                    <View className="flex-row w-fit items-center gap-3 flex-1">
                        <Image className="w-14 h-14 rounded-full" source={{uri:ImageHook()}}/>
                        <View>
                            <Text className="font-bold">Sonny Sangha</Text>
                            <Text className="text-xs text-gray-500">your rider</Text>
                        </View>
                    </View>
                    <Text className="text-[#00ccbb] font-bold text-lg">Call</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}