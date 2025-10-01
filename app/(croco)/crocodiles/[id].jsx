import { Link, useLocalSearchParams, useRouter } from "expo-router";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import { StyleSheet, Text, Button } from "react-native";
import { useColorScheme } from "react-native";
import { COLORS } from "../../../constants/colors";
import { useEffect, useState } from "react";
import CrocoCard from "../CrocoCard";
import { useCrocos } from "../../../hooks/UseCrocos";


export default function CrocoDetail() {
    const colorScheme = useColorScheme();
    const theme = COLORS[colorScheme] ?? COLORS.light;

    const router = useRouter();
    const [croco, setCroco] = useState(null);
    const { id } = useLocalSearchParams();

    const { getCrocoId, deleteCrocoId } = useCrocos();

    useEffect(() => {
        async function fetchCroco() {
            const data = await getCrocoId(id);
            //console.log("Fetched data:", data);
            setCroco(data);
        }
        fetchCroco();
    }, [id])

    const handleDelete = async (id) => {
        await deleteCrocoId(id);
        router.push("(croco)/Crocodiles")
    }

    if (!croco) {
        return <ThemedText>Loading...</ThemedText>;
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedView>
                <CrocoCard
                    Common_Name={croco.Common_Name}
                    Family={croco.Family}
                    Country_Region={croco.Country_Region}
                    Age_Class={croco.Age_Class}
                    Sex={croco.Sex}
                    Notes={croco.Notes}
                />
                <ThemedView style={styles.btnGroup}>
                    <Button title="Видалити" onPress={() => handleDelete(croco.$id)}></Button>
                    <Button title="Редагувати" onPress={() => router.push(`/updatecroco/${croco.$id}`)}></Button>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    btnGroup: {
        display: "flex",
        gap: 10,
        justifyContent: "space-between",
    }
});