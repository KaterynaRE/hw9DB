import { StyleSheet, Text, View } from "react-native";


export default function CrocoCard({ Common_Name, Family, Country_Region, Age_Class, Sex, Notes }) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>Common name: {Common_Name}</Text>
            <Text style={styles.text}>Family: {Family}</Text>
            <Text style={styles.text}>Country region: {Country_Region}</Text>
            <Text style={styles.text}>Age class: {Age_Class}</Text>
            <Text style={styles.text}>Sex: {Sex}</Text>
            <Text style={styles.text}>Notes: {Notes}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
    },
    text: {
        fontSize: 16,
        marginBottom: 4,
        color: "black",
    },
});