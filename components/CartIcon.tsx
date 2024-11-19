import { TouchableOpacity } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { cartIcon } from "@/constants/icons";

const CartIcon = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="w-[60px] h-[60px] items-center justify-center bg-[#1e1e1e]
      rounded-full"
    >
      <SvgXml xml={cartIcon} />
    </TouchableOpacity>
  );
};

export default CartIcon;
