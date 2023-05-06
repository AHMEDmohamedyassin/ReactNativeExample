import {View , Text , TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default BasketButton = () => {
    const navigation = useNavigation();
    return (
    <View className="absolute bottom-0 w-full">
        <TouchableOpacity onPress={()=>navigation.navigate('BasketScreen')} className="my-10 bg-maincolor flex-row justify-between p-3 m-3 rounded-lg items-center">
            <Text className="text-white font-bold rounded bg-[#00aaaa] p-2">5</Text>
            <Text className="text-white font-bold text-[18px]">view Basket</Text>
            <Text className="text-white font-bold">L.E 200</Text>
        </TouchableOpacity>
    </View>
    );
}