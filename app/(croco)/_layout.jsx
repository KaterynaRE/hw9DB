import { Stack } from "expo-router";
import { usePathname, Link } from "expo-router";
import { StyleSheet, useColorScheme, View } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import CrocoProvider from "../../contexts/CrocoContext";


export default function CrocoLayout() {
    const pathname = usePathname();
    const colorScheme = useColorScheme();
    const currentPage = pathname.replace("/", "");

    return (
        <CrocoProvider>
            <ThemedView style={styles.container}>
                <View style={styles.header}>
                    <Link href="/" style={styles.link}>Головна</Link>
                    <Link href="/(croco)/Crocodiles" style={styles.link}>Крокодили</Link>
                </View>
                <View style={styles.content}>
                    <Stack screenOptions={{ headerShown: false }}>
                    </Stack>
                </View>
            </ThemedView>
        </CrocoProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 100,
        backgroundColor: "#5aaacfff",
        paddingTop: 20,
    },
    link: {
        top: 10,
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
    },
    content: {
        flex: 1,
    },

});