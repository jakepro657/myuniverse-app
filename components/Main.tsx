import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import {
  Appbar,
  BottomNavigation,
  Button,
  Card,
  Text,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GlobalAppbar from "./GlobalAppbar";
import JobServicesBlock from "./JobServicesBlock";
import TrendingUniverseBlock from "./TrendingUniverseBlock";
import { useEffect, useState } from "react";
import MyBottomNavigation from "./BottomNavigationBar";
import Login from "./Login";
import { atom, useRecoilState} from "recoil";
import { API_URL } from "@env"

export default function Main() {
  // const loginState = atom({
  //   key: "loginState",
  //   default: false,
  // });

  // const userState = atom({
  //   key: "userState",
  //   default: "",
  // });

  // const [user, setUser] = useRecoilState(userState);
  // const [isLogin, setLogin] = useRecoilState(loginState);

  const [user, setUser] = useState("");
  const [isLogin, setLogin] = useState(false);
  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {isLogin ? (
            <ScrollView>
              <GlobalAppbar />
              <Text style={styles.text} key={1}>
                안녕하세요! {user}님!
              </Text>
              <TrendingUniverseBlock />
              <JobServicesBlock />
            </ScrollView>
          ) : (
            <Login setUser={setUser} setLogin={setLogin} />
          )}
          {/* <MyBottomNavigation /> */}
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginLeft: 16,
    marginTop: 16,
  },
});
