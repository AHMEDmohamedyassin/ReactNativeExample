import React, { useEffect } from "react";
import { Text, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native'
import * as Progress from 'react-native-progress'

export default LoadingScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('DeliveryScreen')
        }, 1000);
    } ,[])
    return (
        <View className="flex-1 bg-[#00ccbb] items-center justify-center">
            <Animatable.Image
                animation="bounceInUp"
                iterationCount={1}
                className="h-64 w-64"
                source={require('../assets/animation.gif')}
            />
            <Text className="font-bold text-white text-lg mt-5">loading ...</Text>
            <Progress.Circle size={50} indeterminate={true} color="white" className="mt-5" />
        </View>
    )
}