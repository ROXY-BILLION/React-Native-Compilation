import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      {/* Title */}
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        Welcome to React Native
      </Text>

      {/* Subtitle */}
      <Text style={{ fontSize: 18, color: "gray", marginTop: 5 }}>
        Beginner to Pro Learning Path
      </Text>

      {/* Paragraph */}
      <Text style={{ fontSize: 16, marginTop: 10, lineHeight: 22 }}>
        React Native allows you to build mobile apps using JavaScript and React.
        You can create Android and iOS apps using a single codebase with Expo or CLI.
      </Text>
    </View>
  );
}