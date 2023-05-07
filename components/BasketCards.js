import { ScrollView , View} from "react-native";
import BasketCard from "./BasketCard";

export default BasketCards = () => {
    return(
        <ScrollView className="bg-gray-200">
            <BasketCard/>
            <BasketCard/>
            <BasketCard/>
            <BasketCard/>
            <BasketCard/>
        </ScrollView>
    )
}