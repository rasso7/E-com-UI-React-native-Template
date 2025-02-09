import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

interface ProductlistProps {
  title: string;
  description: string;

  price: number;
  image: any; // You can be more specific with the type of the image if needed
}
const CartItem: React.FC<ProductlistProps> = ({
  title,
  description,

  price,
  image,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <ScrollView
      className="flex flex-1 bg-white "
      showsVerticalScrollIndicator={false}
    >
      <View className="relative flex-row items-center justify-between mb-4 bg-white rounded-lg shadow p-4">
        {/* Delete Icon */}
        <TouchableOpacity
          // Pass a function to handle the delete action
          className="absolute top-2 right-5"
        >
          <Ionicons name="trash" size={18} color="red" />
        </TouchableOpacity>

        {/* Product Image */}
        <Image
          source={image}
          className="w-20 h-20 rounded-lg bg-gray-200"
          resizeMode="contain"
        />

        {/* Product Details */}
        <View className="flex-1 ml-4">
          <Text
            className="font-bold text-lg"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title.length > 13 ? `${title.slice(0, 13)}...` : title}
          </Text>
          <Text
            className="text-gray-500"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {description.length > 20
              ? `${description.slice(0, 20)}...`
              : description}
          </Text>
          <Text className="font-bold text-lg mt-2">${price.toFixed(2)}</Text>
        </View>

        {/* Quantity Control */}
        <View className="flex-row items-center mt-8">
          <TouchableOpacity
            onPress={decrement}
            className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center"
          >
            <Text className="text-lg font-bold">-</Text>
          </TouchableOpacity>
          <Text className="mx-4">{quantity}</Text>
          <TouchableOpacity
            onPress={increment}
            className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center"
          >
            <Text className="text-lg font-bold text-white">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartItem;
