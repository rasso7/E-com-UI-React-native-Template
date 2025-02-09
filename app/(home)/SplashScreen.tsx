import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <Redirect href="/started" />;
  }
  return (
    <View className="flex flex-row justify-between items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Image source={require("@/assets/images/logo.png")} />
      <Text>Explore The World</Text>
    </View>
  );
};

export default SplashScreen;
