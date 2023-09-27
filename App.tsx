import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Button, Card, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Appbar.Header style={styles.appbar}>
            <Appbar.Action icon="menu" onPress={() => {}} />
            <Appbar.Content title="MY-UNIVERSE" />
            <Appbar.Action icon="bell-badge-outline" onPress={() => {}} />
          </Appbar.Header>

          <Text style={styles.trendingUniverseTitle}>Trending Universe</Text>
          <ScrollView style={styles.trendingUniverse} horizontal={true}>
            <Card style={styles.trending}>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
            </Card>
            <Card style={styles.trending}>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
            </Card>
            <Card style={styles.trending}>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
            </Card>
          </ScrollView>
          <Text style={styles.trendingUniverseTitle}>Job Services</Text>
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
  appbar: {
    backgroundColor: "white",
  },
  trending: {
    width: 128,
    height: 160,
    marginLeft: 16,
    marginBottom: 8,
    backgroundColor: "white",
  },
  trendingUniverse: {},
  trendingUniverseTitle: {
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
