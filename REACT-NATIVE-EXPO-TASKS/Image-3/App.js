import { View, Text, Image } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
      }}
    >
      <View
        style={{
          width: 300,
          backgroundColor: "white",
          padding: 20,
          borderRadius: 20,
          alignItems: "center",

          // Android Shadow
          elevation: 5,

          // iOS Shadow
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        }}
      >
        {/* Profile Image */}
        <Image
          source={require("./assets/profile.jpeg")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            marginBottom: 15,
          }}
        />

        {/* Name */}
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Divine Gift
        </Text>

        {/* Profession */}
        <Text
          style={{
            fontSize: 18,
            color: "gray",
            marginTop: 5,
          }}
        >
          React Native Developer
        </Text>
      </View>
    </View>
  );
}