import { StyleSheet, Text, View, Image } from 'react-native';
import logo from "./assets/logo.jpg";
import student from "./assets/Student.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.schoolName}>Roxy-Billion{"\n"}Academy</Text>
      </View>

      {/* Body */}
      <View>
        <Image source={student} style={styles.profile} />
      </View>
      <View style={styles.details}>
        <Text style={styles.text}>Name:Okeke Divine Gift</Text>
        <Text style={styles.text}>ID-No:#245-789</Text>
        <Text style={styles.text}>Dept: Software-Engineering</Text>
        <Text style={styles.text}>Valid: 10/12/2028</Text>
      </View>


      {/* Footer */}
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems:"center",
    backgroundColor:"#1565C0",
    height: 100,
    paddingHorizontal: 30,
  },
  schoolName: {
    marginTop: 20,
    fontSize: 23,
    color: "white",
  },
  profile:{
    width: 250,
    height: 250,
    borderRadius: 20,
    marginLeft: 60,
    marginTop: 20,
  },
  details: {
    marginLeft: 60,
    marginTop: 30,
  },
  text: {
    fontSize: 25,
  },
  footer:{
    backgroundColor: "#1565C0",
    width: 400,
    marginTop: 80,
    height: 250,
  }
});
