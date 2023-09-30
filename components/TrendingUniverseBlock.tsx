import { Appbar, Button, Card, Text } from "react-native-paper";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  trending: {
    width: 128,
    height: 160,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "white",
  },
  trendingUniverse: {
  },
  trendingUniverseTitle: {
    padding: 16,
    fontSize: 20,
    marginTop: 16,
  },
});

export default function TrendingUniverseBlock() {
  return (
    <>
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
    </>
  );
}
