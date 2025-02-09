import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
const options = [
  {
    title: "Personal information",
    icon: "person-outline",
    content: "Update your personal details like name, email, etc.",
  },
  {
    title: "Login and security",
    icon: "lock-closed-outline",
    content: "Manage your password and two-factor authentication.",
  },
  {
    title: "Customer Support",
    icon: "headset-outline",
    content: "Contact support for any issues or queries.",
  },
  {
    title: "Language",
    icon: "globe-outline",
    content: "Change the language of the app.",
  },
  {
    title: "Share the app",
    icon: "share-outline",
    chevron: "chevron-forward-outline",
    content: "Share this app with your friends and family.",
  },
];

const ProfileScreen = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const navigation = useNavigation();

  const toggleDropdown = (index) => {
    setExpandedItem(expandedItem === index ? null : index); // Toggle dropdown
  };

  return (
    <ScrollView
      className="flex flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex flex-1 mb-[6rem]">
        {/* Upper Section */}
        <View className="bg-purple-500 h-72 justify-center items-center relative">
          {/* Navigation Button */}
          <View className="absolute top-4 left-4">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="border border-gray-200 rounded-full p-2"
            >
              <Ionicons name="arrow-back-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Image with adjusted size */}
          <Image
            source={require("@/assets/images/profile.jpg")}
            className="w-24 h-24 rounded-full border-2 border-white"
          />
          <Text className="text-xl font-bold text-white mt-2  shadow-lg shadow-black/50">
            Md Rashid
          </Text>

          <Text className="text-sm text-white">mdrashid.123@gmail.com</Text>
        </View>

        {/* Navigation Icons */}
        <View className="flex-row justify-around bg-white py-4 -mt-12 rounded-xl mx-4 shadow-lg">
          <TouchableOpacity className="items-center">
            <Ionicons name="document-outline" size={24} color="gray" />
            <Text className="text-sm text-gray-600 font-semibold">
              My Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <Ionicons name="heart-outline" size={24} color="gray" />
            <Text className="text-sm text-gray-600 font-semibold">
              Wishlist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <Ionicons name="notifications-outline" size={24} color="gray" />
            <Text className="text-sm text-gray-600 font-semibold">
              Notifications
            </Text>
          </TouchableOpacity>
        </View>

        {/* Options Section */}
        <View className="mt-6 px-4">
          {options.map((item, index) => (
            <View key={index}>
              {/* Main Option */}
              <TouchableOpacity
                onPress={() => toggleDropdown(index)}
                className="flex-row items-center justify-between py-4 border-b border-gray-200"
              >
                <View className="flex-row items-center space-x-4">
                  <Ionicons name={item.icon} size={24} color="gray" />
                  <Text className="text-base text-gray-700 ml-4">
                    {item.title}
                  </Text>
                </View>
                <Ionicons
                  name={
                    expandedItem === index
                      ? "chevron-up-outline"
                      : "chevron-down-outline"
                  }
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>

              {/* Dropdown Content */}
              {expandedItem === index && (
                <View className="bg-gray-50 p-4 border-l border-r border-b border-gray-200">
                  <Text className="text-sm text-gray-600">{item.content}</Text>
                </View>
              )}
            </View>
          ))}

          {/* Logout */}
          <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-200">
            <View className="flex-row items-center space-x-4">
              <Ionicons name="power-outline" size={24} color="red" />
              <Text
                className="text-base text-red-500 ml-4 font-semibold"
                onPress={() => router.push("/")}
              >
                Log Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="mt-4 px-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-sm text-gray-400">Member ID</Text>
            <TouchableOpacity className="flex-row items-center space-x-1">
              <Text className="text-sm text-gray-400 mr-2">19202033724</Text>
              <Ionicons name="copy-outline" size={16} color="gray" />
            </TouchableOpacity>
          </View>
          <Text className="text-sm text-gray-400 mt-2">Version: 03</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
