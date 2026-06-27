import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.Header}>
        Profile Card
      </Text>

      <Image
        source={require("./assets/Profile.jpeg")}
        style={styles.Image}
      />

      <Text style={styles.Text}>
        Divine Gift
      </Text>

      <Text style={styles.Text2}>
        Mobile Developer
      </Text>

      <Text style={styles.Footer}>
        "Building Mobile Apps"
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#123a90",
    alignItems: "center",
    justifyContent: "center",
  },

  Header: {
    fontSize: 40,
    fontWeight: "900",
    color: "white",
    marginBottom: 20,
  },

  Image: {
    width: 250,
    height: 250,
    borderRadius: 75,
    marginBottom: 20,
  },

  Text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },

  Text2: {
    fontSize: 18,
    color: "#ddd",
    marginBottom: 15,
  },

  Footer: {
    fontSize: 16,
    color: "white",
    fontStyle: "italic",
  },
});