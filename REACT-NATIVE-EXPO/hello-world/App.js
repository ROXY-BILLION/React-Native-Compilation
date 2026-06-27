import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.header}>HELLO APP</Text>

      {/* MAIN CONTENT */}
      <Text style={styles.main}>
        Hello Developer 👋{"\n"}
        Welcome to Expo
      </Text>

      {/* FOOTER */}
      <Text style={styles.footer}>
        Built with Expo
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#111",
  },

  main: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#444",
  },

  footer: {
    position: "absolute",
    bottom: 30,
    fontSize: 14,
    color: "gray",
  },
});