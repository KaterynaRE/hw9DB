import { createContext, useState } from "react";
import { tablesDb } from "../utils/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/UseUser";


const DATABASE_ID = "68d841a2001e774a4724";
const TABLE_ID = "crocodile";
export const CrocoContext = createContext();

const CrocoProvider = ({ children }) => {

    const [croco, setCroco] = useState([]);

    const { user } = useUser();

    async function createCroco(data) {
        try {
            await tablesDb.createRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: ID.unique(),
                data: { ...data },
                permissions: [
                    Permission.read(Role.any()),
                    Permission.update(Role.user(data.userId || "")),
                    Permission.delete(Role.user(data.userId || "")),
                ]
            })
            getCrocodiles();
        } catch (err) {
            console.log(err.message);
        }
    }

    async function getCrocodiles() {
        try {
            const resp = await tablesDb.listRows({
                tableId: TABLE_ID,
                databaseId: DATABASE_ID,
            })
            setCroco(resp.rows);
            //console.log("croco", resp.rows);

        } catch (err) {
            console.log(err.message);
        }
    }

    async function getCrocoId(id) {
        try {
            const resp = await tablesDb.getRow({
                tableId: TABLE_ID,
                databaseId: DATABASE_ID,
                rowId: id,
            })
            console.log("id", resp);
            return resp;
        } catch (err) {
            console.log(err.message);
        }
    }

    async function deleteCrocoId(id) {
        try {

        } catch (err) {
            console.log(err.message);
        }
    }
    
    async function updateCrocoId(id) {
        try {

        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <CrocoContext.Provider value={{
                croco,
                createCroco,
                getCrocodiles,
                getCrocoId,
                deleteCrocoId,
                updateCrocoId
            }} >
                {children}
            </CrocoContext.Provider>
        </>
    )
}

export default CrocoProvider;