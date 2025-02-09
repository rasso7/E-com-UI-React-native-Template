import { Stack } from "expo-router";
import React from "react";
import "../../global.css";
const Layout = () => {
  return (
    <Stack
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      <Stack.Screen
        name="SplashScreen"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false, animation: "fade" }}
      />
    </Stack>
  );
};

export default Layout;
