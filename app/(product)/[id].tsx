import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import items from "../lib/data";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams, useRouter } from "expo-router";
const profile = () => {
  const [active, setactive] = useState("All");
  const navigation = useNavigation();
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const { id } = useLocalSearchParams();
  const product = items.find((item) => item.id.toString() === id);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked); // Toggle the like state
  };
  if (!product) {
    return (
      <View>
        <Text>Product not found</Text>
      </View>
    );
  }
  return (
    <View className="flex flex-1 bg-white rounded-lg shadow-lg p-4 ">
      {/* Product Image */}
      <View className="relative pt-6  h-[40%] mb-5">
        <Image
          source={product.image}
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
        <TouchableOpacity
          onPress={toggleFavorite}
          className="absolute top-2 right-14 bg-text-gray-100 p-2 rounded-full shadow"
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={20}
            color={isFavorite ? "#FF0000" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity className="absolute top-2 right-2 bg-text-gray-100 p-2 rounded-full shadow">
          <Ionicons name="share-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Product Details */}
      <View className="mt-8">
        <View className="flex flex-row justify-between mr-2  items-center ">
          <Text className="text-xl font-bold mb-2 mr-3" numberOfLines={2}>
            {product.title
              .split("")
              .map((char, index) =>
                index > 0 && index % 28 === 0 ? `\n${char}` : char
              )
              .join("")}
          </Text>

          <Text className=" bg-red-500 text-sm font-semibold mb-2  border rounded-xl border-slate-300 p-2 text-white  ">
            {(product.discount * 100).toFixed(0)} % Off
          </Text>
        </View>

        <View className="flex-row items-center mt-2 ">
          <View className="flex flex-row border rounded-xl border-slate-300 p-1 px-3 ">
            <Ionicons name="star" size={15} color="gold" />
            <Text className="ml-1 text-yellow-500 text-sm font-bold ">
              {product.rating}
            </Text>
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
        <Text className="text-gray-600 mt-4">{product.description}</Text>
      </View>

      {/* Storage Options */}
      <View className="flex-row items-center justify-between mt-4">
        <View className="flex-row space-x-2">
          <FlatList
            data={product.variant}
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
              ${product.originalPrice}
            </Text>
            <Text className="text-xl font-bold text-black">
              ${product.price}
            </Text>
          </View>
          <TouchableOpacity
            className="bg-blue-500 w-[70%] py-5 rounded-xl"
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
