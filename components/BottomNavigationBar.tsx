import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Home from "./Home";
import Page from "./Page";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const MyBottomNavigation = () => {

  return (
    <NavigationContainer>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Tab.Navigator
              screenOptions={{
                tabBarStyle: {
                },
              }}
            >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Settings" component={Page} />
            </Tab.Navigator>
          </View>
        </NavigationContainer>
  );
};

export default MyBottomNavigation;
