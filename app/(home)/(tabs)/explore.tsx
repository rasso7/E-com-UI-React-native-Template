import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import items from "@/app/lib/data";

const Explore = () => {
  const [active, setActive] = useState(null);

  return (
    <View className="bg-white flex-1">
      {/* Search Bar */}
      <View className="p-4">
        <View className="relative w-full border rounded-full border-slate-400">
          {/* Icon */}
          <Ionicons
            name="search-outline"
            size={22}
            color="black"
            className="absolute top-3 left-3 pl-2"
          />

          {/* TextInput */}
          <TextInput
            className="pl-[48px] rounded-full h-12"
            placeholder="Search any Product..."
          />
          <Ionicons
            name="mic"
            size={22}
            color="gray"
            className="absolute top-3 right-3 "
          />
        </View>
      </View>

      {/* Recent Searches Section */}
      <View className="my-2">
        {/* Header */}
        <View className="flex flex-row justify-between px-4">
          <Text className="text-lg font-bold text-black">RECENT SEARCHES</Text>
          <Text className="text-lg font-semibold text-red-500">EDIT</Text>
        </View>

        {/* Recent Searches List */}
        <FlatList
          data={items}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              // onPress={() => setActive(item.id)}
              className="items-center mx-3 mt-5"
            >
              <View className="flex flex-col justify-center items-center">
                <Image
                  source={item.image}
                  className="h-16 w-16 rounded-full bg-gray-300"
                />
                <Text
                  className="text-center text-sm mt-1 text-black font-medium"
                  numberOfLines={2}
                >
                  {item.title.length > 15
                    ? `${item.title.slice(0, 15)}...`
                    : item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Explore;
