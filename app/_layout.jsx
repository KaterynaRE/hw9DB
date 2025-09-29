import { Slot, Stack } from "expo-router";
import { View, StyleSheet, useColorScheme } from "react-native";
import AuthProvider from "../contexts/AuthContext";


const RootLayout = ({ children }) => {
    const colorScheme = useColorScheme();
    return (
        <AuthProvider>
            <View style={{ flex: 1 }}>
                <Stack screenOptions={{
                    headerStyle: { backgroundColor: "#000" },
                    headerTintColor: "#fff",
                    headerTitleStyle: { fontWeight: "bold" },
                    headerShown: false
                }}>
                    <Stack.Screen name="index" options={
                        { title: "Головна" }
                    } />
                </Stack>
            </View>
        </AuthProvider>
    )
}
export default RootLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerFooter: {
        position: "absolute",
        width: "100%",
        height: 80,
        alignItems: "center",
        bottom: 0,
        padding: 10,
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    footer: {
        textAlign: "center",
    }
})