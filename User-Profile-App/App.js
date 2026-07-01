import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
const skills = [
  "React Native",
  "JavaScript",
  "Expo",
  "CSS",
];
const gallery = [
  require("./assets/IMG-20250308-WA0054.jpg"),
  require("./assets/IMG-20250307-WA0024.jpg"),
  require("./assets/backend3.jpeg"),
  require("./assets/App2.jpeg"),
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <ScrollView showsVerticalScrollIndicator={false}
       contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image source={require("./assets/Background.jpg")} style={styles.cover} />
          <Image source={require("./assets/Screenshot_20250403-123451_1.jpg")} style={styles.avatar}  />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Okeke Divine Gift</Text>
          <Text style={styles.job}>Software Engineer</Text>
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={18} color="#666" />
            <Text style={styles.infoText}>Lagos,Nigeria</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={18} color="#666" />
            <Text style={styles.infoText}>giftdivine787@gmail.com</Text>
          </View>
        </View>
        <View style={styles.card}>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.number}>350</Text>
            <Text>Followers</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.number}>500</Text>
            <Text>Following</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.number}>120</Text>
            <Text>Posts</Text>
          </View>
        </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Skills</Text>

          {skills.map((skill) => (
            <View key={skill} style={styles.skillRow}>
              <Ionicons name="checkmark-circle" size={20} color="green" />
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Gallery</Text>

          <View style={styles.gallery}>
            {gallery.map((img, index) => (
              <Image
                key={index}
                source={img}
                style={styles.galleryImage}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    position: "relative",
  },
  cover: {
    width: "100%",
    height: 250,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    position: "absolute",
    bottom: -70,
    alignSelf: "center",
    borderWidth: 5,
    borderColor:"#fff"
  },
  profileInfo: {
  marginTop: 90,
  alignItems: "center",
},

name: {
  fontSize: 28,
  fontWeight: "700",
},

job: {
  marginTop: 5,
  fontSize: 16,
  color: "#666",
},

infoRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 10,
},

infoText: {
  marginLeft: 8,
  color: "#666",
  },
card: {
  backgroundColor: "#fff",
  marginHorizontal: 20,
  marginTop: 30,
  borderRadius: 20,
  padding: 20,

  elevation: 4,

  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 6,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  },
stats: {
  flexDirection: "row",
  justifyContent: "space-around",
},

statItem: {
  alignItems: "center",
  flex: 1,
},

number: {
  fontSize: 24,
  fontWeight: "bold",
  },
sectionTitle: {
  fontSize: 22,
  fontWeight: "700",
  marginBottom: 15,
  },
skillRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 15,
  },
skillText: {
  marginLeft: 10,
  fontSize: 17,
  color: "#444",
  },
gallery: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
},

galleryImage: {
  width: "48%",
  height: 140,
  borderRadius: 12,
  marginBottom: 12,
},
});
