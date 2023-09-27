import { Appbar, Button, Card, Text } from "react-native-paper";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "white",
  },
});

export default function GlobalAppbar() {
  return (
    <Appbar.Header style={styles.appbar}>
      <Appbar.Action icon="menu" onPress={() => {}} />
      <Appbar.Content title="MY-UNIVERSE" />
      <Appbar.Action icon="bell-badge-outline" onPress={() => {}} />
    </Appbar.Header>
  );
}
