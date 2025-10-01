import { Button, Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import ThemedView from "../../../components/ThemedView";
import { useEffect, useReducer, useState } from "react";
import ThemedTextInput from "../../../components/ThemedTextInput";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useCrocos } from "../../../hooks/UseCrocos";


export default function UpdateCroco() {
    const [Common_Name, set_Common_Name] = useState("");
    const [Family, set_Family] = useState("");
    const [Country_Region, set_Country_Region] = useState("");
    const [Age_Class, set_Age_Class] = useState("");
    const [Sex, set_Sex] = useState("");
    const [Notes, set_Notes] = useState("");

    const router = useRouter();
    const { id } = useLocalSearchParams();
    //console.log("UpdateCroco id:", id);
    const { updateCroco, getCrocoId } = useCrocos();


    useEffect(() => {
        async function fetchCroco() {
            const croco = await getCrocoId(id);
            if (croco) {
                set_Common_Name(croco.Common_Name ?? "");
                set_Family(croco.Family ?? "");
                set_Country_Region(croco.Country_Region ?? "");
                set_Age_Class(croco.Age_Class ?? "");
                set_Sex(croco.Sex ?? "");
                set_Notes(croco.Notes ?? "");
            }
        }
        fetchCroco();
    }, [id])

    const handleSubmit = async () => {
        await updateCroco(id, {
            Common_Name,
            Family,
            Country_Region,
            Age_Class: parseInt(Age_Class, 10),
            Sex,
            Notes,
        })
        router.push(`/crocodiles/${id}`);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView>
                <ThemedTextInput
                    placeholder="Common name"
                    value={Common_Name}
                    onChangeText={set_Common_Name}
                />
                <ThemedTextInput
                    placeholder="Family"
                    value={Family}
                    onChangeText={set_Family}
                />
                <ThemedTextInput
                    placeholder="Country region"
                    value={Country_Region}
                    onChangeText={set_Country_Region}
                />
                <ThemedTextInput
                    placeholder="Age class"
                    value={Age_Class}
                    onChangeText={set_Age_Class}
                    keyboardType="numeric"
                />
                <ThemedTextInput
                    placeholder="Sex"
                    value={Sex}
                    onChangeText={set_Sex}
                />
                <ThemedTextInput
                    placeholder="Notes"
                    value={Notes}
                    onChangeText={set_Notes}
                />
                <Button title="Оновити" onPress={() => handleSubmit()}></Button>
                <Link href={"/"}>На головну</Link>
            </ThemedView>

        </TouchableWithoutFeedback>
    )
}