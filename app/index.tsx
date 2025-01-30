import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/">
        <Text className="text-lg text-red-400">Home</Text>
      </Link>
      <Link href="/sign-in">
        <Text>Sign in</Text>
      </Link>
      <Link href="/root/(tabs)/explore">
        <Text>explore</Text>
      </Link>
      <Link href="/root/(tabs)/profile">
        <Text>explore</Text>
      </Link>
      <Link href="/root/properties/1">
        <Text>Properties</Text>
      </Link>
    </View>
  );
}
