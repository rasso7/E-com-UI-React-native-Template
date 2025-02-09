import React from "react";
import { View, Text, Image } from "react-native";
import items from "@/app/lib/data"; // Your data source

const ProductDetails = ({ route }) => {
  const { id } = route.params;
  const product = items.find((item) => item.id === id);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg font-semibold text-gray-900">
          Product not found!
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4 bg-white">
      <Image
        source={product.image}
        className="w-full h-64 rounded-xl mb-4"
        resizeMode="cover"
      />
      <Text className="text-xl font-bold text-gray-900 mb-2">
        {product.title}
      </Text>
      <Text className="text-gray-600 mb-4">{product.description}</Text>
      <Text className="text-lg font-bold text-gray-900 mb-1">
        Price: ${product.price}
      </Text>
      <Text className="text-sm text-gray-500 line-through mb-1">
        Original Price: ${product.originalPrice}
      </Text>
      <Text className="text-sm text-orange-500">
        Discount:{" "}
        {Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )}
        % OFF
      </Text>
    </View>
  );
};

export default ProductDetails;
