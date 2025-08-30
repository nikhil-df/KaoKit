import { useThemeColors } from '@/constants/colors';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import React, { forwardRef } from 'react';
import { Pressable } from 'react-native';

const CustomTabBarButton = forwardRef<any, any>((props, ref) => (
  <Pressable
    {...props}
    ref={ref}
    android_ripple={null}
    style={({ pressed }) => [
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,  // Add vertical padding for better centering
      },
      pressed && { opacity: 0.7 },
    ]}
  >
    {props.children}
  </Pressable>
));

export default function TabLayout() {
  const colors = useThemeColors();
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: colors.background,
        tabBarInactiveTintColor: colors.accent,
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: 70,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        },
        tabBarIconStyle: {
          marginTop: 0,
          marginBottom: 0,
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="competition"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ladder" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="ownKao"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="puzzle-edit" color={color} size={26} />
          ),
        }}
      />
    </Tabs>
  );
}
