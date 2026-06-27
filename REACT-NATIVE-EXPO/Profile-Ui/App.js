import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Profile Card</Text>
      <Image source={require("./assets/Profile.jpeg")}
        style={styles.image} />
      
      <Text style={styles.text1}>Divine Gift</Text>
      <Text style={styles.text2}>Mobile Developer</Text>

      <Text style={styles.footer}>"Building Mobile Apps"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
