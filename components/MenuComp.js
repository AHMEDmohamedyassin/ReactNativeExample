import React , {useState} from "react";
import {
    ScrollView,
    Text ,
    TouchableOpacity,
    View ,
} from "react-native";
import { ItemMenuComp } from "./ItemMenuComp";
import {useNavigation} from '@react-navigation/native'

export default MenuComp = () => {
    const navigation = useNavigation()
    const [getTotal , setTotal] = useState(0);
    return (
        <ScrollView>
            <ItemMenuComp setTotal={setTotal} getTotal={getTotal} />
            <ItemMenuComp setTotal={setTotal} getTotal={getTotal} />
            <ItemMenuComp setTotal={setTotal} getTotal={getTotal} />
            <ItemMenuComp setTotal={setTotal} getTotal={getTotal} />
            <ItemMenuComp setTotal={setTotal} getTotal={getTotal} />
            <TouchableOpacity onPress={()=>navigation.navigate('BasketScreen')} className="my-10 bg-maincolor flex-row justify-between p-3 m-3 rounded-lg items-center">
                <Text className="text-white font-bold rounded bg-[#00aaaa] p-2">{getTotal}</Text>
                <Text className="text-white font-bold text-[18px]">view Basket</Text>
                <Text className="text-white font-bold">L.E 200</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
