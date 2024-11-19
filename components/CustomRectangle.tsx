import * as React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const CustomRectangle: React.FC<{ children?: React.ReactNode }> = ({
  children,
  ...props
}) => (
  <View className="relative h-[400px] w-[288px]">
    <Svg width={288} height={400} viewBox="0 0 288 400" fill="none" {...props}>
      <G filter="url(#filter0_d_1_33323)">
        <Path
          d="M6 145.186C6 134.008 12.2136 123.758 22.123 118.588L238.123 5.89235C258.096 -4.52833 282 9.96189 282 32.4899V360C282 376.569 268.569 390 252 390H36C19.4315 390 6 376.569 6 360V145.186Z"
          fill="url(#paint0_linear_1_33323)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1_33323"
          x1={129}
          y1={35}
          x2={200.5}
          y2={410.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1E1E1E" />
          <Stop offset={1} />
        </LinearGradient>
      </Defs>
    </Svg>

    <View style={styles.childrenContainer}>
      {children}
    </View>
  </View>
);

export default CustomRectangle;

const styles = StyleSheet.create({
  childrenContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
