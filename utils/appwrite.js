import { Account, Avatars, Client, TablesDB } from "react-native-appwrite";

export const client = new Client();
client
//.setEndpoint("https://fra.cloud.appwrite.io/v1")
.setProject("68d81ff400321c543917")
.setPlatform("Crocodile")
.setDevKey("bb12c3d413ca65b2ba597f02732dc475ca2135c63b5bef3eec9a520aba21bbaf4ee1f8d5d7595acd59447e27413b9e9fb35369b0bb25b037e3de1ea51ebe7d621cd5d58c4a3dcd8999fc8a4be175551107c378ce2aabf3c69efe79552d245880f6c141de86d4bc89088201e7a29067de89e56973ed78471653cc8b05bcb0a902")

export const account = new Account(client);
export const avatars = new Avatars(client);
export const tablesDb = new TablesDB(client);