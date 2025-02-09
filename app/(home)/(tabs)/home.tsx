import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Ionicons } from "@expo/vector-icons";
import Productlist from "@/app/lib/productlist";
import { Link, useRouter } from "expo-router";
import items from "@/app/lib/data";
const home = () => {
  const [active, setactive] = useState("All");
  const router = useRouter();

  return (
    <ScrollView
      className="flex flex-1 bg-white "
      showsVerticalScrollIndicator={false}
    >
      <View className="flex flex-1 mb-[4.3rem]">
        <View className="flex flex-row justify-between items-center p-4">
          <Text className="text-lg font-semibold">Discover</Text>

          {/* Cart Icon and Badge Container */}
          <TouchableOpacity onPress={() => router.push("/cart")}>
            <View className="relative">
              {/* Cart Icon */}
              <View className="w-9 h-9 border rounded-full border-slate-400 flex items-center justify-center">
                <Ionicons name="cart-outline" size={22} color="black" />
              </View>

              {/* Badge */}
              <Text className="absolute -top-2 -right-1 text-center text-xs w-4 h-4 rounded-full bg-purple-500 text-white">
                3
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View className="px-4">
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
        </View>
        <View className="bg-white flex-1">
          {/* Search Bar */}

          {/* Recent Searches Section */}
          <View className="my-2 mt-4">
            {/* Header */}
            <View className="flex flex-row justify-between px-4">
              <Text className="text-lg font-bold text-black">All Featured</Text>
              <View className="flex flex-row justify-center items-center border rounded-xl border-slate-300 p-1 px-3 ">
                <Text className="ml-1 text-gray-600 text-sm font-bold mr-2 ">
                  Filter
                </Text>
                <Ionicons name="options" size={15} color="gray" />
              </View>
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
                      {item.category.length > 15
                        ? `${item.category.slice(0, 15)}...`
                        : item.category}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View className="relative w-full h-[185px] overflow-visible mb-10 px-4 pt-8 ">
          {/* Main container with background */}
          <View className="w-full h-full bg-purple-500 rounded-xl overflow-hidden ">
            {/* Content container */}
            <View className="flex-1 p-6">
              {/* Text content */}
              <View className="w-[60%]">
                <Text className="text-3xl font-semibold text-white mb-1">
                  Exclusive
                </Text>
                <Text className="text-3xl font-semibold text-white mb-4">
                  Sales
                </Text>

                {/* Button */}
                <TouchableOpacity className="bg-white rounded-md py-2 px-6 self-start">
                  <Text className="text-purple-500 text-base">Explore now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Image on the right */}
          <Image
            source={require("@/assets/images/i4.png")}
            className="absolute -right-1 bottom-[-0px] w-[55%] h-[115%]"
            resizeMode="contain"
          />
        </View>
        <View className="my-0">
          <View className="flex flex-row justify-between px-4">
            <Text className="text-lg font-semibold text-black">Explore</Text>
            <Text className="text-lg font-semibold text-purple-500">
              See More
            </Text>
          </View>
          <View className="my-3">
            <FlatList
              data={["All", "Smartphones", "Headphones", "Laptop", "Speakers"]}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setactive(item)}>
                  <View
                    className={`px-5 py-3 mt-3 mx-3 rounded-xl ${
                      active === item
                        ? "bg-purple-500 text-black"
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
        <View className="p-3 pt-1">
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Link href={`/${item.id}`}>
                <Productlist {...item} />
              </Link>
            )}
            numColumns={2}
            columnWrapperStyle={{
              marginBottom: 16,
              justifyContent: "space-between",
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default home;
