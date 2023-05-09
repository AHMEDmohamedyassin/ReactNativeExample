import {
    SafeAreaView,
    Text,
    View,
    Image,
    TextInput,
} from "react-native";
import {
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon,
} from "react-native-heroicons/outline";
import FeaturesComp from "../components/FeaturesComp";
import CategoriesComp from "../components/CategoriesComp";
import { ScrollView } from "react-native";
import ImageHook from '../Hooks/ImageHook'

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView className="bg-gray-200">
            {/** header */}
            <View className="bg-white py-1">
                {/** header upper part */}
                <View className="flex-row items-center p-2 ">
                    <View className="flex-row flex-1">
                        <Image
                            source={{ uri: ImageHook() }}
                            className="w-8 h-8 rounded-full"
                        />
                        <View className="mx-2">
                            <Text className="text-gray-500 text-xs">
                                Delivery Now
                            </Text>
                            <View className="flex-row items-center">
                                <Text className="text-gray-900 font-bold text-lg">Current Location</Text>
                                <ChevronDownIcon size={20} color="gray" />
                            </View>
                        </View>
                    </View>
                    <UserIcon size={25} color="#00ccbb" />
                </View>
                {/** header lower part */}
                <View className="flex-row items-center px-2">
                    <View className="flex-1 flex-row bg-gray-300 items-center rounded px-1">
                        <MagnifyingGlassIcon
                            size={20}
                            color="gray"
                            className=""
                        />
                        <TextInput
                            className="py-[1px] px-2 flex-1"
                            placeholder="search"
                        />
                    </View>
                    <AdjustmentsVerticalIcon size={20} color="#00ccbb" />
                </View>
            </View>
            <ScrollView>
                {/**categories */}
                <CategoriesComp/>
                {/** features */}
                <FeaturesComp/>
                <FeaturesComp/>
                <FeaturesComp/>
            </ScrollView>
        </SafeAreaView>
    );
}
