import { Account, Client, Databases } from "appwrite";

export const client = new Client();
client.setProject(process.env.APPWRITE_PROJECT_ID!);
export const databases = new Databases(client);
export const account = new Account(client);
