import React , {useState} from "react";
import {
    ScrollView,
    Text ,
    View ,
} from "react-native";
import { ItemMenuComp } from "./ItemMenuComp";

export default MenuComp = () => {
    const [getTotal , setTotal] = useState(0);
    return (
        <ScrollView>
            <ItemMenuComp setTotal={setTotal} getTotal={getTotal} />
            <ItemMenuComp setTotal={setTotal} getTotal={getTotal} />
            <ItemMenuComp setTotal={setTotal} getTotal={getTotal} />
            <ItemMenuComp setTotal={setTotal} getTotal={getTotal} />
            <ItemMenuComp setTotal={setTotal} getTotal={getTotal} />
            <View className="my-10 bg-maincolor flex-row justify-between p-3 m-3 rounded-lg items-center">
                <Text className="text-white font-bold rounded bg-[#00aaaa] p-2">{getTotal}</Text>
                <Text className="text-white font-bold text-[18px]">view Basket</Text>
                <Text className="text-white font-bold">L.E 200</Text>
            </View>
        </ScrollView>
    );
};
