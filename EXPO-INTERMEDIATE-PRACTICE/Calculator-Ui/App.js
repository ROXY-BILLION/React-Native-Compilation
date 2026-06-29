import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Calculator Display Screen */}
      <View style={styles.displayBox}></View>
      
      {/* Button Pad Container */}
      <View style={styles.buttonPad}>
        {/* Row 1 */}
        <View style={styles.row}>
          <View style={styles.box1}><Text style={styles.btnText}>C</Text></View>
          <View style={styles.box1}><Text style={styles.btnText}>+/-</Text></View>
          <View style={styles.box1}><Text style={styles.btnText}>%</Text></View>
          <View style={styles.box2}><Text style={styles.btnText}>÷</Text></View>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <View style={styles.box1}><Text style={styles.btnText}>7</Text></View>
          <View style={styles.box1}><Text style={styles.btnText}>8</Text></View>
          <View style={styles.box1}><Text style={styles.btnText}>9</Text></View>
          <View style={styles.box2}><Text style={styles.btnText}>×</Text></View>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          <View style={styles.box1}><Text style={styles.btnText}>4</Text></View>
          <View style={styles.box1}><Text style={styles.btnText}>5</Text></View>
          <View style={styles.box1}><Text style={styles.btnText}>6</Text></View>
          <View style={styles.box2}><Text style={styles.btnText}>-</Text></View>
        </View>

        {/* Row 4 */}
        <View style={styles.row}>
          <View style={styles.box1}><Text style={styles.btnText}>1</Text></View>
          <View style={styles.box1}><Text style={styles.btnText}>2</Text></View>
          <View style={styles.box1}><Text style={styles.btnText}>3</Text></View>
          <View style={styles.box2}><Text style={styles.btnText}>+</Text></View>
        </View>

        {/* Row 5 */}
        <View style={styles.row}>
          <View style={styles.box1}><Text style={styles.btnText}>0</Text></View>
          <View style={styles.box1}><Text style={styles.btnText}>.</Text></View>
          <View style={styles.box1}><Text style={styles.btnText}>⌫</Text></View>
          <View style={styles.box2}><Text style={styles.btnText}>=</Text></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",      // Centers the display and button pad horizontally
    justifyContent: "flex-start",
  },
  displayBox: {
    borderColor: "white",
    backgroundColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 55,
    width: '90%',              // Responsive width
    height: 180,  
    marginBottom: 25,
  },
  buttonPad: {
    width: '90%',
    gap: 12,                   // Flexbox gap: handles vertical spacing between your rows
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between", // Flexbox space-between: perfectly pushes the 4 buttons to the edges
    width: '100%',
  },
  box1: {
    backgroundColor: "black",
    borderColor: "darkgrey",
    borderWidth: 1,
    borderRadius: 10,
    width: 75,
    height: 65,
    // Flexbox centering for the text inside the button:
    justifyContent: "center",  // Centers text vertically
    alignItems: "center",      // Centers text horizontally
  },
  box2: {
    backgroundColor: "orange",
    borderColor: "darkgrey",
    borderWidth: 1,
    borderRadius: 10,
    width: 75,
    height: 65,
    // Flexbox centering for the text inside the button:
    justifyContent: "center",  
    alignItems: "center",      
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  }
});