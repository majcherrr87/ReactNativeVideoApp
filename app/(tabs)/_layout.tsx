import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import HomeIcon from "@/assets/icons/home-icon.svg";
import SearchIcon from "@/assets/icons/search-icon.svg";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].main,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "400",
          lineHeight: 24,
          letterSpacing: 0.16,
        },
        tabBarIconStyle: {
          marginTop: 6,
        },
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: Colors[colorScheme].background,
            paddingBottom: Platform.OS === "ios" ? 34 : 16,
          },
          default: {
            backgroundColor: Colors[colorScheme].background,
            paddingBottom: 16,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <HomeIcon width={32} height={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <SearchIcon width={32} height={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
