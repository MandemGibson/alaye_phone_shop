import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import CartIcon from "@/components/CartIcon";
import { SvgXml } from "react-native-svg";
import {
  backIcon,
  batteryIcon,
  colorIcon,
  conditionIcon,
  storageIcon,
} from "@/constants/icons";
import ProductDetailTitleAndSub from "@/components/ProductDetailTitleAndSub";
import { Specs } from "@/components/Specs";
import BottomSheet, {
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();

  //Bottom Sheet Modal
  const bottomSheetModalRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "80%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.snapToIndex(1)
  }, []);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView className="h-full">
        <LinearGradient
          colors={["#020116", "#0D0C2E"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[StyleSheet.absoluteFill]}
        />
        <View className="absolute right-0 w-full h-[50%]">
          <LinearGradient
            colors={["#4D4AED", "#141288"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={[StyleSheet.absoluteFill, { borderBottomLeftRadius: 50 }]}
          />
        </View>
        <View className="px-[28px] h-full relative">
          <View className="flex flex-row justify-between mt-[21px] mb-[23px]">
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => router.back()}
              className="w-[60px] h-[60px] justify-center"
            >
              <SvgXml xml={backIcon} />
            </TouchableOpacity>
            <CartIcon />
          </View>

          <View className="flex flex-row -mt-6">
            <View className="flex flex-col gap-[45px] w-1/3">
              <ProductDetailTitleAndSub title="Brand" subtitle="Apple" />
              <ProductDetailTitleAndSub
                title="Model"
                subtitle="iPhone 15 Pro Max"
              />
              <ProductDetailTitleAndSub title="Price" subtitle="GHc 25,000" />
            </View>
            <Image
              source={{
                uri: "https://imgs.search.brave.com/HGLIozV7nrrn2GXGnGRiz7vJup7kyy08feWb1AgMZjc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZHNh/c3NldHMuYXBwbGUu/Y29tL2xpdmUvN1dV/QVMzNTAvaW1hZ2Vz/L2lvcy9pb3MtMTgt/aXBob25lLTE1LXBy/by1jdXN0b21pemUt/bG9jay1zY3JlZW4u/cG5n",
                width: 202,
                height: 363,
              }}
              resizeMode="contain"
              className="-mt-10 -ml-5"
            />
          </View>

          <View className="gap-[14px] mt-2">
            <Text className="text-white font-bold text-[20px]">
              iPhone 15 Pro Max
            </Text>
            <Text className="text-white/80 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              ipsa eaque animi.
            </Text>
          </View>

          <View className="flex flex-row flex-wrap gap-x-[17px] gap-y-[24px] mt-[50px]">
            <Specs icon={batteryIcon} title="Battery Health" value="89%" />
            <Specs icon={storageIcon} title="Storage Size" value="256 GB" />
            <Specs
              icon={conditionIcon}
              title="Condition"
              value="Slightly used"
            />
            <Specs icon={colorIcon} title="Color" value="Silver" />
          </View>

          <View
            className="absolute h-[80px] -bottom-3 left-[24px]
        right-[24px] py-[18px] px-[23px] flex flex-row items-center"
          >
            <LinearGradient
              colors={["#020116", "#1E1E1E"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[StyleSheet.absoluteFill, { borderRadius: 16 }]}
            />
            <View className="flex flex-row w-full justify-between items-center">
              <Text className="text-white text-[20px] font-semibold">
                GHC <Text className="text-white/60">25,000</Text>
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handlePresentModalPress}
                className="border border-[#2231B9] py-[10px] px-[30px]
                rounded-[10px]"
              >
                <Text className="text-[#2231B9] text-[20px] font-semibold">
                  Add to cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <BottomSheet
          ref={bottomSheetModalRef}
          index={-1}
          enablePanDownToClose
          snapPoints={snapPoints}
          handleStyle={{
            backgroundColor: "#191919",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingBottom: 20,
          }}
          handleIndicatorStyle={{
            backgroundColor: "#8B8B8B",
          }}
        >
          <BottomSheetView>
            <Text>{id}</Text>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default ProductDetails;
