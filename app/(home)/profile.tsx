import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import iphone from "@/assets/images/iphone.png";

import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
const profile = () => {
  const [active, setactive] = useState("All");
  const navigation = useNavigation();
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked); // Toggle the like state
  };
  return (
    <View className="flex flex-1 bg-white rounded-lg shadow-lg p-4 ">
      {/* Product Image */}
      <View className="relative pt-6  h-[40%] mb-5">
        <Image
          source={iphone}
          className="w-full h-[120%] rounded-lg"
          resizeMode="contain"
        />
        {/* Like and Share Icons */}
        <TouchableOpacity
          className="absolute top-2 left-2 bg-text-gray-100 p-2 rounded-full shadow"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="absolute top-2 right-14 bg-text-gray-100 p-2 rounded-full shadow">
          <Ionicons name="heart-outline" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="absolute top-2 right-2 bg-text-gray-100 p-2 rounded-full shadow">
          <Ionicons name="share-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Product Details */}
      <View className="mt-8">
        <View className="flex flex-row justify-between mr-2  items-center ">
          <Text className="text-xl font-bold mb-2 mr-3">Iphone 16</Text>
          <Text className=" bg-red-500 text-sm font-semibold mb-2  border rounded-xl border-slate-300 p-2 text-white  ">
            40 % Off
          </Text>
        </View>

        <View className="flex-row items-center mt-2 ">
          <View className="flex flex-row border rounded-xl border-slate-300 p-1 px-3 ">
            <Ionicons name="star" size={15} color="gold" />
            <Text className="ml-1 text-yellow-500 text-sm font-bold ">4.8</Text>
          </View>
          <TouchableOpacity onPress={handleLikeToggle}>
            <View className="flex-row ml-2 border rounded-xl border-slate-300 p-1">
              <Ionicons
                name="thumbs-up"
                size={15}
                color={isLiked ? "green" : "red"}
              />
              <Text className="ml-2 text-green-600 text-sm">94%</Text>
            </View>
          </TouchableOpacity>

          <Text className="ml-2 text-slate-400 text-sm">( 117 reviews )</Text>
        </View>
        <Text className="text-gray-600 mt-4">
          The Microsoft Xbox Series X gaming console is capable of impressing
          with minimal boot times and mesmerizing visual effects when playing
          games at up to 120 frames per second.
        </Text>
      </View>

      {/* Storage Options */}
      <View className="flex-row items-center justify-between mt-4">
        <View className="flex-row space-x-2">
          <FlatList
            data={["264 Gb", "216 GB", " 64 GB"]}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setactive(item)}>
                <View
                  className={`px-4 py-3 mt-3 mr-3 rounded-xl ${
                    active === item
                      ? "bg-green-500 text-black"
                      : "border border-black"
                  }`}
                >
                  <Text
                    className={`font-semibold ${
                      active === item ? "text-white" : "text-black"
                    }`}
                  >
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      {/* Price Section */}
      <View className="mt-7">
        {/* Horizontal Line */}
        <View className="h-[1px] bg-slate-400 mb-3" />

        {/* Price and Add to Cart Section */}
        <View className="flex-row items-center justify-between p-3 pt-1">
          <View>
            <Text className="text-base text-gray-400 line-through">
              $650.00
            </Text>
            <Text className="text-xl font-bold text-black">$570.00</Text>
          </View>
          <TouchableOpacity
            className="bg-green-600 w-[70%] py-5 rounded-xl"
            onPress={() => router.push("/cart")}
          >
            <Text className="text-white text-lg font-bold text-center">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Add to Cart Button */}
    </View>
  );
};

export default profile;
