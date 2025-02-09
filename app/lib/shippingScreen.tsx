import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-virtualized-view";
import { router } from "expo-router";

type Address = {
  id: string;
  title: string;
  location: string;
  phone: string;
  details: string;
};
const ShippingBillingScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState("home");
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  // Address Data
  const addressList: Address[] = [
    {
      id: "home",
      title: "🏠 Home",
      location: "Sunamganj",
      phone: "#971-50-1234567",
      details:
        "Room #1 - Ground Floor, Al Najoun Building, 24 B Street, Dubai - UAE",
    },
    {
      id: "office",
      title: "🏢 Office",
      location: "Sunamganj",
      phone: "#971-50-1234567",
      details:
        "Room #1 - Ground Floor, Al Najoun Building, 24 B Street, Dubai - UAE",
    },
  ];

  const renderAddressItem = ({ item }: { item: Address }) => (
    <TouchableOpacity
      className={`p-4 border rounded-lg mb-4 ${
        selectedAddress === item.id ? "border-blue-500" : "border-gray-300"
      }`}
      onPress={() => setSelectedAddress(item.id)}
    >
      <View className="flex-row justify-between items-center mb-2">
        <Text className="font-semibold text-lg">{item.title}</Text>
        <Ionicons
          name="pencil"
          size={18}
          color={selectedAddress === item.id ? "blue" : "gray"}
        />
      </View>
      <Text className="text-gray-600 font-medium">{item.location}</Text>
      <Text className="text-gray-600">{item.phone}</Text>
      <Text className="text-gray-600 mt-2">{item.details}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Header */}
      <View className="flex flex-row items-center mb-4">
        <TouchableOpacity
          className=" bg-gray-200 p-2 rounded-full shadow mr-5"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold ">Shipping & Billing</Text>
      </View>

      {/* Address List */}
      <FlatList
        data={addressList}
        keyExtractor={(item) => item.id}
        renderItem={renderAddressItem}
      />

      {/* Add New Address */}
      <TouchableOpacity
        className="border-dashed border-2 border-gray-400 p-4 rounded-lg mb-4 flex items-center"
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-blue-500 font-semibold">
          + Add New Shipping Address
        </Text>
      </TouchableOpacity>

      {/* Personal Info */}
      <View className="bg-gray-100 p-4 rounded-lg mt-3">
        <Text className="font-semibold mb-2">Personal Info</Text>
        <Text className="text-gray-600">📍 Bill to the Home address</Text>
        <Text className="text-gray-600">📞 01746247923</Text>
        <Text className="text-gray-600">📧 quickrakibull@gmail.com</Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg mt-6 flex items-center"
        onPress={() => router.push("/payment")}
      >
        <Text className="text-white font-bold">Go to Payment</Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center inset-0 bg-black/50">
          {/* Modal Container */}
          <View className="w-4/5 bg-white rounded-lg p-6 shadow-lg relative">
            {/* Close Button */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="absolute top-4 right-4"
            >
              <Ionicons name="close-circle-outline" size={30} color="black" />
            </TouchableOpacity>

            {/* Modal Content */}
            <View className="mt-10">
              <Text className="text-black font-semibold mb-3">Title</Text>
              <TextInput
                placeholder="Title (e.g., Home, Office)"
                className="border border-gray-300 rounded-lg p-3 mb-4"
              />
              <Text className="text-black font-semibold mb-3">City</Text>
              <TextInput
                placeholder="Location"
                className="border border-gray-300 rounded-lg p-3 mb-4"
              />
              <Text className="text-black font-semibold mb-3">Phone</Text>
              <TextInput
                placeholder="Phone (+91)"
                className="border border-gray-300 rounded-lg p-3 mb-4"
              />
              <Text className="text-black font-semibold mb-3">Details</Text>
              <TextInput
                placeholder="More Info (e.g., Street, Landmark)"
                className="border border-gray-300 rounded-lg p-3 mb-4"
              />
              <TouchableOpacity className="bg-blue-500 p-3 rounded-lg items-center">
                <Text className="text-white font-bold">Add Address</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ShippingBillingScreen;
