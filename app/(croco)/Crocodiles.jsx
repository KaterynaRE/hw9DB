import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import { Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useCrocos } from "../../hooks/UseCrocos";
import Pagination from "../Pagination/Pagination";

export default function Crocodiles() {
    const router = useRouter();
    const { croco, getCrocodiles } = useCrocos();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(2);
    const itemsPerPage = 9;

    useEffect(() => {
        getCrocodiles();
    }, [])

    const paginatedData = croco.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePress = (item) => {
        router.push(`/crocodiles/${item.$id}`);
    }

    return (
        <ThemedView style={styles.container}>
            {paginatedData.map((item) => (
                <Pressable
                    key={item.$id}
                    onPress={() => handlePress(item)}
                >
                    <ThemedView style={styles.cityCard}>
                        <ThemedText style={styles.textStyle}>Крокодил: {item.Common_Name}</ThemedText>
                    </ThemedView>
                </Pressable>
            ))}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </ThemedView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    },
    cityCard: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        elevation: 2,

    },
    textStyle: {
        color: "black",
        textAlign: "center"
    }
});