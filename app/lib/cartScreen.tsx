import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import CartItem from "@/app/lib/cartitem";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import items from "@/app/lib/data";
import { router } from "expo-router";

const cartScreen = () => {
  const navigation = useNavigation();

  // Calculate the subtotal by summing the prices of all items in the cart
  const subtotal = items.reduce((total, item) => total + item.price, 0);

  // Calculate total discount
  const totalDiscount = items.reduce(
    (total, item) => total + item.originalPrice * item.discount,
    0
  );
  // Calculate the final price after discount
  const finalPrice = subtotal - totalDiscount + 5.0; // Adding $5.00 for delivery fee

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="flex-row justify-between items-center p-4 bg-white shadow">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="border border-gray-200 rounded-full p-2"
        >
          <Ionicons name="arrow-back-outline" size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">My cart</Text>
        <TouchableOpacity className="border border-gray-200 rounded-full p-2">
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {/* Cart Items */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem {...item} />}
        contentContainerStyle={{ paddingBottom: 10 }} // Adjust padding to reduce the gap
        showsVerticalScrollIndicator={false}
      />

      {/* Content below FlatList */}
      <View className="bg-white p-5">
        {/* Promo Code Section */}
        <View className="flex-row items-center justify-between bg-gray-100 p-3 rounded-lg">
          <TextInput
            placeholder="Enter promo code"
            editable={false}
            value="ADJ3AK"
            className="text-lg font-semibold text-gray-800"
          />
          <View className="flex flex-row ">
            <Text className="text-blue-500 font-medium pr-2">
              Promocode applied
            </Text>
            <Ionicons
              name="checkmark-circle-outline"
              size={20}
              color="#3b82f6"
            />
          </View>
        </View>

        {/* Price Breakdown */}
        <View className="mt-5 space-y-3">
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Subtotal:</Text>
            <Text className="text-gray-800 font-semibold">
              ${subtotal.toFixed(2)}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Delivery Fee:</Text>
            <Text className="text-gray-800 font-semibold">$5.00</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Discount:</Text>
            <Text className="text-gray-800 font-semibold">{totalDiscount}</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity
          className="mt-5 bg-blue-500 rounded-lg p-4"
          onPress={() => router.push("/billing")}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Checkout for ${finalPrice.toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default cartScreen;
