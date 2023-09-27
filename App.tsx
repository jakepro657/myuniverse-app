import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Button, Card, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GlobalAppbar from "./components/GlobalAppbar";
import JobServicesBlock from "./components/JobServicesBlock";
import TrendingUniverseBlock from "./components/TrendingUniverseBlock";
import { useEffect, useState } from "react";

export default function App() {
  const URL = "http://:8000/user";
  const [data, setData] = useState<string>("");
  const [id, setId] = useState(1);

  const fetchData = async () => {
    const response = await fetch(`${URL}/${id}`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    setData(result.data.email);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <GlobalAppbar />
          <Text style={styles.text} key={1}>{data}</Text>
          <TrendingUniverseBlock />
          <JobServicesBlock />
        </ScrollView>
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
    marginTop: 16
  }
});
