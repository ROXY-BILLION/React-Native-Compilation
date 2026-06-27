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
      <View
        style={{
          width: 300,
          backgroundColor: "white",
          padding: 20,
          borderRadius: 20,

          // Android Shadow
          elevation: 5,

          // iOS Shadow
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          My Card
        </Text>

        <Text>
          This is a centered card using View.
        </Text>
      </View>
    </View>
  );
}