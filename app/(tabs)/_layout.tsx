import {
  homeIcon,
  homeIconFilled,
  notificationIcon,
  notificationIconFilled,
  productIcon,
  productIconFilled,
  profileIcon,
  profileIconFilled,
} from "@/constants/icons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

const tabArr = [
  {
    name: "home",
    title: "Home",
    inactiveIcon: homeIcon,
    activeIcon: homeIconFilled,
  },
  {
    name: "products",
    title: "Products",
    inactiveIcon: productIcon,
    activeIcon: productIconFilled,
  },
  {
    name: "notifications",
    title: "Notifications",
    inactiveIcon: notificationIcon,
    activeIcon: notificationIconFilled,
  },
  {
    name: "profile",
    title: "Profile",
    inactiveIcon: profileIcon,
    activeIcon: profileIconFilled,
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          height: 80,
          bottom: 24,
          left: 24,
          right: 24,
          paddingBottom: 27,
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#2231B9",
        tabBarBackground: () => (
          <LinearGradient
            colors={["#020116", "#1E1E1E"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={[StyleSheet.absoluteFill, { borderRadius: 16 }]}
          />
        ),
        tabBarShowLabel: false,
      }}
    >
      {tabArr.map(({ name, title, activeIcon, inactiveIcon }, index) => (
        <Tabs.Screen
          key={index}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color, focused }) => (
              <SvgXml xml={focused ? activeIcon : inactiveIcon} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
