import { View, Text } from "react-native";

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
      {/* Quote Card */}
      <View
        style={{
          width: 300,
          padding: 20,
          backgroundColor: "white",
          borderRadius: 15,

          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        }}
      >
        {/* Quote Text */}
        <Text
          style={{
            fontSize: 18,
            fontStyle: "italic",
            color: "#333",
          }}
        >
          "Consistency is what transforms average developers into professionals."
        </Text>

        {/* Colored Text */}
        <Text
          style={{
            marginTop: 10,
            color: "blue",
            fontWeight: "bold",
          }}
        >
          — React Native Journey
        </Text>

        {/* Extra Italic Text */}
        <Text
          style={{
            marginTop: 5,
            fontStyle: "italic",
            color: "gray",
          }}
        >
          Keep building every day.
        </Text>
      </View>
    </View>
  );
}