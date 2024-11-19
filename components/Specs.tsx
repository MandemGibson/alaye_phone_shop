import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

type SpecsProps = {
    icon: string;
    title: string;
    value: string;
  };
  
 export const Specs = ({ icon, title, value }: SpecsProps) => {
    return (
      <View className="flex flex-row items-center gap-2 w-[164px]">
        <View className="p-[18px] flex items-center justify-center">
          <LinearGradient
            colors={["#1E1E1E", "#000"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={[StyleSheet.absoluteFill, { borderRadius: 15 }]}
          />
          <SvgXml xml={icon} />
        </View>
        <View>
          <Text className="text-white text-[15px] font-semibold">{title}</Text>
          <Text className="text-white/70 text-[12px] font-semibold">{value}</Text>
        </View>
      </View>
    );
  };