import { Link, router } from "expo-router";
import React from "react";
import { View, Text, ImageBackground, StatusBar } from "react-native";

const Home = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/main.jpg")} // Replace with your actual image URL
      className="flex-1 justify-end"
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <View className="px-6 pb-10">
        {/* Title */}
        <Text className="text-pink-100 text-2xl font-bold text-center mb-3">
          You want{"\n"} Loot ?, here you go!
        </Text>

        {/* Subtitle */}
        <Text className="text-white text-sm text-center mb-6">
          Where pros and noobs shop alike.
        </Text>

        {/* Button */}
        <Link href="/home" className="bg-pink-600 py-3 rounded-lg">
          <Text className="text-white text-lg font-semibold text-center">
            Get Started
          </Text>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default Home;
