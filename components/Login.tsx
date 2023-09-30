import { StyleSheet, View } from "react-native";
import { atom, useRecoilState, RecoilRoot } from "recoil";
import { useState, useEffect } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { API_URL } from "@env";

export default function Login(props: any) {
  const URL = `http://${API_URL}/user`;
  const [id, setId] = useState<number>(1);

  const fetchData = async () => {
    const response = await fetch(`${URL}/${id}`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    const userEmail = result.data.email;
    if (userEmail) {
      props.setUser(userEmail);
      props.setLogin(true);
    }
  };

  const handleLogin = (event: any) => {
    fetchData();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="ID"
        onChangeText={(value: any) => {
          setId(parseInt(value));
        }}
      />
      <Text>{id}</Text>
      <Button style={styles.input} onPress={handleLogin}>
        로그인
      </Button>
    </SafeAreaView>
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
  input: {
    width: 128,
    height: 64,
  },
});
