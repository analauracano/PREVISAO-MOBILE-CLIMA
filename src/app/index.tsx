import SearchBar from "@/components/SearchBar"
import { homeStyles } from "@/styles/home.styles"
import { ScrollView, StatusBar, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"


export default function App() {
    const router = useRouter()

    const handleSearch = (cityName: string) => {
        router.push({
            pathname: "/details",
            params: { cityName }
        })
    }

    return (
        <SafeAreaView style={homeStyles.safeArea}>
        <StatusBar barStyle="dark-content" />

        <ScrollView>

        <View style={homeStyles.header}>
            <Text style={homeStyles.title}>🌤️ Previsao do Tempo</Text>
            <Text style={homeStyles.subtitle}>Busque o clima em qualquer cidade!</Text>
        </View>

        <SearchBar onSearch={handleSearch}/>

        <View style={homeStyles.emptyContainer}>
            <Text style={homeStyles.emptyText}>
                🌎 Digite o nome de uma cidade para começar
            </Text>
        </View>

        </ScrollView>
        </SafeAreaView>
    )
}