import { Button, Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import ThemedView from "../../components/ThemedView";
import { useReducer, useState } from "react";
import ThemedTextInput from "../../components/ThemedTextInput";
import { Link, useRouter } from "expo-router";
import { useCrocos } from "../../hooks/UseCrocos";


export default function CreateCroco() {
    const [common_name, set_Common_Name] = useState("");
    const [family, set_Family] = useState("");
    const [country_region, set_Country_Region] = useState("");
    const [age_class, set_Age_Class] = useState("");
    const [sex, set_Sex] = useState("");
    const [notes, set_Notes] = useState("");

    const router = useRouter();
    const { createCroco } = useCrocos();

    const handleSubmit = async () => {
        await createCroco({
            common_name,
            family,
            country_region,
            age_class,
            sex,
            notes,
        })
        set_Common_Name("");
        set_Family("");
        set_Country_Region("");
        set_Age_Class("");
        set_Sex("");
        set_Notes("");
        router.replace("/Crocodiles");

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView>
                <ThemedTextInput
                    placeholder="Common name"
                    value={common_name}
                    onChangeText={set_Common_Name}
                />
                <ThemedTextInput
                    placeholder="Family"
                    value={family}
                    onChangeText={set_Family}
                />
                <ThemedTextInput
                    placeholder="Country region"
                    value={country_region}
                    onChangeText={set_Country_Region}
                />
                <ThemedTextInput
                    placeholder="Age class"
                    value={age_class}
                    onChangeText={set_Age_Class}
                />
                <ThemedTextInput
                    placeholder="Sex"
                    value={sex}
                    onChangeText={set_Sex}
                />
                <ThemedTextInput
                    placeholder="Notes"
                    value={notes}
                    onChangeText={set_Notes}
                />
                <Button title="Додати" onPress={handleSubmit}></Button>
                <Link href={"/"}>На головну</Link>
            </ThemedView>

        </TouchableWithoutFeedback>
    )
}