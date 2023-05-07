import {View , Text , TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default BasketCheckout = () => {
    const navigation = useNavigation();
    return (
        <View className="bg-white p-3 pb-6">
            <View className="flex-row justify-between items-center my-2">
                <Text className="text-gray-500 text-xs">Subtotal</Text>
                <Text className="text-gray-500 text-xs">L.E 200</Text>
            </View>
            <View className="flex-row justify-between items-center my-2">
                <Text className="text-gray-500 text-xs">Delivery Fee</Text>
                <Text className="text-gray-500 text-xs">L.E 15</Text>
            </View>
            <View className="flex-row justify-between items-center my-2">
                <Text className="">Order total</Text>
                <Text className="font-bold">L.E 215</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('LoadingScreen')} className="bg-maincolor rounded">
                <Text className="font-bold text-white mx-auto text-lg py-2">Place order</Text>
            </TouchableOpacity>
        </View>
    );
}