import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";
import CrocoProvider from "../contexts/CrocoContext";

export default function Index() {

    return (
        <ThemedView style={styles.container}>
            <View style={styles.section}>
                <Link href="/(croco)/Crocodiles" asChild>
                    <ThemedText style={styles.sectionTitle}>Крокодили</ThemedText>
                </Link>

            </View>
            <Spacer height={200}></Spacer>
            <ThemedView style={styles.linkGroup}>
                <Link href="/login" asChild>
                    <ThemedText style={styles.linkText}>Увійти</ThemedText>
                </Link>
                <Link href="/profile" asChild>
                    <ThemedText style={styles.linkText}>Профіль</ThemedText>
                </Link>
                <Link href="/(croco)/CreateCroco" asChild>
                    <ThemedText style={styles.linkText}>Add Cro</ThemedText>
                </Link>
            </ThemedView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    section: {
        marginBottom: 40,
        alignItems: "center",
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: "bold",
    },
    linkGroup: {
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 20,
        backgroundColor: "#5aaacfff",
        width: "100%",
        padding: 20,
        position: "absolute",
        top: 0
    },
    linkText: {
        marginTop: 20,
        fontSize: 20,
    },
});

