import { Appbar, Button, Card, Text } from "react-native-paper";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { API_URL } from "@env";

const styles = StyleSheet.create({
  margin: {
    marginBottom: 64
  },
  jobServicesTitle: {
    padding: 16,
    fontSize: 20,
    marginTop: 32,
  },
  jobServices: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  job: {
    shadowOpacity: 0,
    backgroundColor: "white",
    width: 328,
    height: 160,
    marginBottom: 16,
    padding: 16,
  },
});

export default function JobServicesBlock() {

  const URL = `http://${API_URL}/post`;
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

    setData(result.data.content);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <View style={styles.margin}>
      <Text style={styles.jobServicesTitle}>Job Services</Text>
      <View style={styles.jobServices}>
        <Card style={styles.job}>
          <Text>{data}</Text>
        </Card>
        <Card style={styles.job}>
          <Text>{data}</Text>
        </Card>
        <Card style={styles.job}>
          <Text>{data}</Text>
        </Card>
      </View>
    </View>
  );
}
