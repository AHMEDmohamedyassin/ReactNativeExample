import {Text , View , Image, TouchableOpacity} from 'react-native'

export default BasketCard = () => {
    return (
        <View className="flex-row p-3 bg-white border-solid border-b-[0.25px] border-gray-100">
            <View className="flex-row flex-1 justify-start items-center">
                <Text className="text-[#00ccbb]">+2</Text>
                <Image className="w-14 h-14 mx-5 rounded-full"
                source={{uri:"https://links.papareact.com/wru"}}/>
                <Text>Edamame</Text>
            </View>
            <View className="flex-row flex-2 justify-between items-center">
                <Text className="mx-3">L.E  26</Text>
                <TouchableOpacity>
                    <Text  className="text-[#00ccbb]">remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}