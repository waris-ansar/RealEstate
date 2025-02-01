import * as Linking from "expo-linking";
import { Avatars, Client, Account, OAuthProvider } from "react-native-appwrite";
import { openAuthSessionAsync } from "expo-web-browser";

const config = {
  platform: "com.waris.restate",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
};

export const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function continueWithGoogle() {
  try {
    const redirctUri = Linking.createURL("/");
    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirctUri
    );
    if (!response)
      throw new Error("Something went wrong while creating the token");

    const broweserResult = await openAuthSessionAsync(
      response.toString(),
      redirctUri
    );

    if (broweserResult.type !== "success") {
      throw new Error("Something went wrong while logging in");
    }

    const url = new URL(broweserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId)
      throw new Error("Something went wrong while creating session!");

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function logout() {
  try {
    const response = await account.deleteSession("current");
    return response;
  } catch (error) {
    console.log(error, "error logging out");
    return false;
  }
}

export async function getUserData() {
  try {
    const response = await account.get();
    if (!response.$id) return null;
    const userAvatar = avatar.getInitials(response.name);
    return {
      ...response,
      avatar: userAvatar,
    };
  } catch (error) {
    console.log(error, "Error while getting user data");
    return null;
  }
}
