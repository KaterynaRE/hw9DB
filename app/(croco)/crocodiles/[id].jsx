import { Link, useLocalSearchParams } from "expo-router";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import { StyleSheet, Text } from "react-native";
import { useColorScheme } from "react-native";
import { COLORS } from "../../../constants/colors";
import { useEffect, useState } from "react";
import CrocoCard from "../CrocoCard";
import { useCrocos } from "../../../hooks/UseCrocos";


export default function CrocoDetail() {
    const colorScheme = useColorScheme();
    const theme = COLORS[colorScheme] ?? COLORS.light;

    const [croco, setCroco] = useState(null);
    const { id } = useLocalSearchParams();

    const { getCrocoId, deleteCrocoId, updateCrocoId } = useCrocos();

    useEffect(() => {
        async function fetchCroco() {
            const data = await getCrocoId(id);
            console.log("Fetched data:", data);
            setCroco(data);
        }
        fetchCroco();
    }, [id])

    const handleDelete = async () => {
        await deleteCrocoId(croco.$id);
        router.replace("/Crocodiles")
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
            </ThemedView>
        </ThemedView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

});