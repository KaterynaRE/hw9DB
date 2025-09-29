import { useRouter } from "expo-router";
import { useUser } from "../../hooks/UseUser";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

export default function GuestOnly({ children, redirectTo = "/(blog)/articles" }) {

    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user != null) {
            router.push(redirectTo);
        }
    }, [user, authChecked, redirectTo]);

    if (!authChecked)
        return (
            <ThemedLoader />
        )
    return children;
}

// const GuestOnly = ({children}) => {
//     const {user, authChecked} = useUser();
//     const router = useRouter();
//     useEffect(()=>{
//         if(authChecked && user!==null)
//             router.replace("/profile");
//     }, [user, authChecked]);
//     if(!authChecked || user)
//         return (
//      <ThemedLoader/>
//     )
//     return children;
// }

// export default GuestOnly;