import { View, Image } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("./assets/profile.jpeg")}
        style={{
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
}