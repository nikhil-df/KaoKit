import { useThemeColors } from "@/constants/colors";
import { useAppStyles } from "@/constants/styleSheet";
import Ionicons from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
    const router = useRouter();
  const styles = useAppStyles();
  const theme = useThemeColors();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
  };

  const onSelectOption = (option : string) => {
    console.log("Selected option:", option);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => router.push("../(sideScreens)/search")}>
      <Ionicons name="search" color={theme.background} size={26} />
    </TouchableOpacity>

      <Text style={styles.headerText}>KaoKit</Text>

      <View style={{ position: "relative" }}>
        <TouchableOpacity onPress={toggleDropdown}>
          <Ionicons name="menu" color={theme.background} size={26} />
        </TouchableOpacity>

        {dropdownVisible && (
          <View style={styles.headerDropdownContainer}>
            <TouchableOpacity onPress={() => onSelectOption("Profile")} style={styles.headerDropdownItem}>
              <Text style={styles.headerDropdownText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSelectOption("Settings")} style={styles.headerDropdownItem}>
              <Text style={styles.headerDropdownText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSelectOption("Logout")} style={styles.headerDropdownItem}>
              <Text style={styles.headerDropdownText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const dropdownStyles = StyleSheet.create({

});
