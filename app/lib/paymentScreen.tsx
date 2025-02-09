import React, { useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { Checkbox } from "expo-checkbox";
const PaymentScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState("card"); // Default method is "card"
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Header */}
      <View className="flex flex-row items-center mb-4">
        <TouchableOpacity
          className="bg-gray-200 p-2 rounded-full shadow mr-5"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Choose payment method</Text>
      </View>
      <View className="border-b border-gray-300 mb-4" />
      {/* Payment Amount */}
      <View className="flex flex-row justify-between items-center mb-5">
        <Text className="text-xl font-bold text-gray-800">Payment Amount:</Text>
        <Text className="text-xl font-bold text-gray-800">$99.99</Text>
      </View>
      <View className="border-b border-gray-300 mb-6" />
      {/* Payment Methods */}
      <View className="flex flex-row items-center mb-6">
        <TouchableOpacity
          onPress={() => setSelectedMethod("card")}
          className="mx-2"
        >
          <View className="flex flex-col justify-center items-center mr-6 ml-8">
            <Image
              source={require("@/assets/images/card.png")}
              className={`h-16 w-16 rounded-full bg-gray-300 ${
                selectedMethod === "card"
                  ? "border-2 border-blue-500"
                  : "border-2 border-gray-300"
              }`}
            />
            <Text
              className={`font-medium ${
                selectedMethod === "card" ? "text-blue-500" : "text-black"
              }`}
            >
              Card
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedMethod("upi")}
          className="mx-2"
        >
          <View className="flex flex-col justify-center items-center mr-6">
            <Image
              source={require("@/assets/images/upi.png")}
              className={`h-16 w-16 rounded-full bg-gray-300 ${
                selectedMethod === "upi"
                  ? "border-2 border-blue-500"
                  : "border-2 border-gray-300"
              }`}
            />
            <Text
              className={`font-medium ${
                selectedMethod === "upi" ? "text-blue-500" : "text-black"
              }`}
            >
              UPI
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedMethod("netbanking")}
          className="mx-2"
        >
          <View className="flex flex-col justify-center items-center">
            <Image
              source={require("@/assets/images/netbanking.png")}
              className={`h-16 w-16 rounded-full bg-gray-300 ${
                selectedMethod === "netbanking"
                  ? "border-2 border-blue-500"
                  : "border-2 border-gray-300"
              }`}
            />
            <Text
              className={`font-medium ${
                selectedMethod === "netbanking" ? "text-blue-500" : "text-black"
              }`}
            >
              Net Banking
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="border-b border-gray-300 " />
      {/* Card Payment Form */}
      {selectedMethod === "card" && (
        <View className="p-4  ">
          <Text className="text-base font-medium mb-2">Card Information</Text>
          <TextInput
            placeholder="Card number"
            className="border border-gray-300 rounded-lg p-3 bg-white mb-4 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <View className="flex flex-row justify-between space-x-3">
            <TextInput
              placeholder="MM / YY"
              className="flex-1 border border-gray-300 rounded-lg p-3 bg-white mr-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <TextInput
              placeholder="CVV"
              className="flex-1 border border-gray-300 rounded-lg p-3 bg-white shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </View>

          <Text className="text-base font-medium mt-4 mb-2">
            Country or Region
          </Text>
          <TextInput
            placeholder="United States"
            className="border border-gray-300 rounded-lg p-3 bg-white mb-4 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <TextInput
            placeholder="ZIP"
            className="border border-gray-300 rounded-lg p-3 bg-white mb-4 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />

          <TouchableOpacity className="flex flex-row items-center">
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? "#3b82f6" : undefined} // Blue-500 color in hex
              style={{
                width: 16,
                height: 16,
              }}
            />
            <Text className="ml-2 text-gray-700">
              Save this card for future payments
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* UPI Section */}
      {selectedMethod === "upi" && (
        <View className="p-4 ">
          <Text className="text-base font-medium mb-2">Enter your UPI ID</Text>
          <TextInput
            placeholder="example@upi"
            className="flex-1 border border-gray-300 rounded-lg p-3 bg-white mr-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <TouchableOpacity className="flex flex-row items-center mt-4">
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? "#3b82f6" : undefined} // Blue-500 color in hex
              style={{
                width: 16,
                height: 16,
              }}
            />
            <Text className="ml-2 text-gray-700">
              Save this UPI for future payments
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Net Banking Section */}
      {selectedMethod === "netbanking" && (
        <View className="p-4 ">
          <Text className="text-base font-medium mb-2">Select your bank</Text>
          <TextInput
            placeholder="Enter your bank name"
            className="border border-gray-300 rounded-lg p-3 bg-white mr-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <TouchableOpacity className="flex flex-row items-center mt-4">
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? "#3b82f6" : undefined} // Blue-500 color in hex
              style={{
                width: 16,
                height: 16,
              }}
            />
            <Text className="ml-2 text-gray-700">
              Save this UPI for future payments
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View className="border-b border-gray-300 " />
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg flex flex-row justify-center items-center mt-5"
        onPress={() => router.push("/paymentdone")}
      >
        <Text className="text-white font-medium">Continue</Text>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="white"
          className="ml-2"
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentScreen;
