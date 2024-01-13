import { SafeAreaView } from "react-native";
import Bottom from "../Components/BottomNavigation";
import VideoComponent from "../Components/Video"
import { Card, Text } from "react-native-paper";


const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <Bottom />
        </SafeAreaView>
    )
}

export default Home;