import { Appbar, Button, Card, Text } from "react-native-paper";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
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
  return (
    <>
      <Text style={styles.jobServicesTitle}>Job Services</Text>
      <View style={styles.jobServices}>
        <Card style={styles.job}>
          <Text>1</Text>
        </Card>
        <Card style={styles.job}>
          <Text>2</Text>
        </Card>
        <Card style={styles.job}>
          <Text>3</Text>
        </Card>
      </View>
    </>
  );
}
