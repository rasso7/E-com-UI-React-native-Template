import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
const paymentDoneScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      <View className="items-center mb-3">
        <Image
          source={require("@/assets/images/paymentdone.png")}
          className="w-48 h-48 mb-4"
        />
        <Text className="text-xl font-bold text-gray-900">Payment Success</Text>
        <Text className="text-gray-600 text-center mt-2">
          Your payment was successful!
          {"\n"}Just wait, your skincare products will arrive at home.
        </Text>
      </View>
      <TouchableOpacity className="w-full bg-blue-500 py-3 rounded-xl items-center mb-4">
        <Text className="text-white font-semibold">Track Order Status</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="w-full bg-blue-100 py-3 rounded-xl items-center"
        onPress={() => router.push("/home")}
      >
        <Text className="text-blue-500 font-semibold">Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default paymentDoneScreen;
