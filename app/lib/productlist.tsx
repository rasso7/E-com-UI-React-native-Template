import { Ionicons } from "@expo/vector-icons";

import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ProductlistProps {
  title: string;
  rating: string;

  price: number;
  originalPrice: number;
  image: any;
  id: string; // You can be more specific with the type of the image if needed
}

const Productlist: React.FC<ProductlistProps> = ({
  title,
  rating,

  price,
  originalPrice,
  image,
  id,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  // Calculate discount percentage
  const discountPercentage = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return (
    <View className="w-[160px] bg-white rounded-2xl border border-gray-300 p-3 shadow-lg">
      {/* Image container with heart icon */}
      <View>
        <View className="relative mb-3">
          <Image
            source={image}
            className="w-full h-[180px] rounded-xl"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={toggleFavorite}
            className="absolute -top-2 right-0 w-8 h-8  items-center justify-center"
          >
            <Ionicons
              name="heart"
              size={20}
              color={isFavorite ? "#FF0000" : "#C5C5C5"}
              fill={isFavorite ? "#FF0000" : "none"}
            />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="space-y-2">
          <View className="flex flex-row justify-between pr-1 items-center">
            {/* Title */}
            <Text
              className="text-sm font-semibold text-gray-900"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {title.length > 13 ? `${title.slice(0, 13)}...` : title}
            </Text>

            {/* Rating Section */}
            <View className="flex flex-row items-center">
              <Ionicons name="star" size={15} color="#FF9529" />
              {/* Filled yellow star */}
              <Text className="text-gray-600 ml-1">{rating}</Text>
              {/* Added margin for spacing */}
            </View>
          </View>

          {/* Price Section */}
          <View className="mt-2 flex flex-row pr-3  items-center ">
            {/* Discounted Price */}
            <Text className="text-sm font-bold text-gray-900 pr-2">
              ${price}
            </Text>
            {/* Original Price */}
            <Text className="text-xs text-gray-500 line-through pr-2">
              $ {originalPrice}
            </Text>
            {/* Discount Percentage */}
            <Text className="text-xs text-orange-500">
              ({discountPercentage}% OFF)
            </Text>
          </View>

          {/* Reminders */}
        </View>
      </View>
    </View>
  );
};

export default Productlist;
