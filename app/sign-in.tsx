import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleGoogleLogin = () => {
    console.log("Google Login");
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="bg-white h-full py-8 px-4">
        <Image
          source={images.onboarding}
          resizeMode="contain"
          className="w-full h-4/6"
        />

        <View className="px-10">
          <Text className="font-rubik text-base text-black-200 text-center uppercase">
            Welcome to Real Scout
          </Text>
          <Text className="mt-3 font-rubik-semibold text-3xl text-black capitalize text-center">
            Let’s get you closer to
            <Text className="text-primary-300">your ideal home</Text>
          </Text>
          <Text className="capitalize text-black-200 font-rubik text-lg text-center mt-5">
            Login to Real Scout with Google
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleGoogleLogin}
          className="bg-white shadow-md  shadow-zinc-300 rounded-full w-full py-4 mt-5 border border-[#0061FF0A]"
        >
          <View className="flex flex-row items-center justify-center gap-2 bg-transparent">
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="font-rubik-medium font-medium text-lg text-black">
              Sign Up with Google
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
