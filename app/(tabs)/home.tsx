import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import {
  accessoriesIcon,
  filterIcon,
  menuIcon,
  mobilePhoneIcon,
  pcIcon,
} from "@/constants/icons";
import CustomRectangle from "@/components/CustomRectangle";
import CartIcon from "@/components/CartIcon";

const categories = [
  {
    id: 1,
    name: "Phones",
    icon: mobilePhoneIcon,
  },
  {
    id: 2,
    name: "Laptops",
    icon: pcIcon,
  },
  {
    id: 3,
    name: "Accessories",
    icon: accessoriesIcon,
  },
];

const Home = () => {
  const [category, selectedCategory] = useState("Phones");

  const handleCategoryChange = (name: string) => {
    selectedCategory(name);
  };

  return (
    <SafeAreaView className="h-full">
      <LinearGradient
        colors={["#020116", "#0D0C2E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[StyleSheet.absoluteFill]}
      />
      <View className="absolute right-0 w-[40%] h-[90%]">
        <LinearGradient
          colors={["#4D4AED", "#141288"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[StyleSheet.absoluteFill, { borderBottomLeftRadius: 50 }]}
        />
      </View>
      <View>
        <View className="px-[28px]">
          <View className="flex flex-row justify-between mt-[21px] mb-[23px]">
            <TouchableOpacity
              activeOpacity={0.9}
              className="w-[60px] h-[60px] items-center justify-center bg-[#1e1e1e]
           rounded-full"
            >
              <SvgXml xml={menuIcon} />
            </TouchableOpacity>
            <CartIcon />
          </View>
          <Text className="text-white/80 text-[18px]">Featured Products</Text>

          <View
            className="flex flex-row justify-evenly mt-[31px]"
            style={{ gap: 29 }}
          >
            <View className="px-[22px] py-[19px]">
              <SvgXml xml={filterIcon} />
            </View>
            {categories.map(({ id, icon, name }) => (
              <TouchableOpacity
                key={id}
                activeOpacity={0.9}
                onPress={() => handleCategoryChange(name)}
                className="w-[70px] h-[65px] flex items-center justify-center"
              >
                {category === name ? (
                  <LinearGradient
                    colors={["#4D4AED", "#141288"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={[StyleSheet.absoluteFill, { borderRadius: 15 }]}
                  />
                ) : (
                  <LinearGradient
                    colors={["#1E1E1E", "#000"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={[StyleSheet.absoluteFill, { borderRadius: 15 }]}
                  />
                )}

                <SvgXml xml={icon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[1, 1, 1, 1]}
          renderItem={({ item, index }) => (
            <CustomRectangle key={index}>
              <View className="bg-transparent relative flex flex-col items-center justify-center gap-5">
                <Image
                  source={{
                    uri: "https://imgs.search.brave.com/0Wd3c1OFXE2VKLG-ZBIUnMiMSILbrBu1YN6Va-e9VVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL3Yv/aXBob25lL2hvbWUv/YngvaW1hZ2VzL292/ZXJ2aWV3L3NlbGVj/dC9pcGhvbmVfMTVf/X2J1d2FnZmYwbXd3/aV94bGFyZ2UucG5n",
                  }}
                  className="w-[100px] h-[170px] bg-transparent"
                  style={{
                    shadowColor: "#fff",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 4,
                  }}
                  resizeMode="contain"
                />
                <Text className="text-white text-[24px] font-semibold">
                  iPhone 15 Pro Max
                </Text>
                <Text className="text-white/30 text-[16px]">Apple Product</Text>
              </View>
            </CustomRectangle>
          )}
          keyExtractor={(_, index) => index.toString()}
          className="mt-10"
          contentContainerStyle={{
            paddingHorizontal: 28,
            gap: 20,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
