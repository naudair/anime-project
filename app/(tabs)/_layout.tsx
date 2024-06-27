import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { SearchIcon } from "@/components/navigation/SearchIcon";
import { DownloadIcon } from "@/components/navigation/DownloadIcon";
import { UserIcon } from "@/components/navigation/UserIcon";
import { HomeIcon } from "@/components/navigation/HomeIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: "#040B1C",
        paddingVertical: 60,
        paddingHorizontal: 30,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: () => <SearchIcon />,
        }}
      />
      <Tabs.Screen
        name="download"
        options={{
          title: "Download",
          tabBarIcon: () => <DownloadIcon />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <UserIcon />,
        }}
      />
      {/* <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        /> */}
    </Tabs>
  );
}

{
  /* <Tabs.Screen
  name="explore"
  options={{
    title: 'Explore',
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
    ),
  }}
/> */
}
