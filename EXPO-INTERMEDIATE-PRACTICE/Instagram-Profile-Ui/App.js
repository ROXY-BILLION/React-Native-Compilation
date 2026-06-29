import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import Profile from './assets/Profile.jpg';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header Username */}
        <Text style={styles.headerName}>Okeke Divine Gift</Text>
        
        {/* Top Row: Profile Pic + Stats */}
        <View style={styles.topRow}>
          <View style={styles.imageContainer}>
            <Image source={Profile} style={styles.logo} />
          </View>
          
          <View style={styles.statsCard}>
            <View style={styles.statBox}><Text style={styles.num}>1,211</Text><Text style={styles.text}>Posts</Text></View>
            <View style={styles.statBox}><Text style={styles.num}>6,211</Text><Text style={styles.text}>Followers</Text></View>
            <View style={styles.statBox}><Text style={styles.num}>12.6k</Text><Text style={styles.text}>Following</Text></View>
          </View>
        </View>

        {/* Bio Section */}
        <View style={styles.bioContainer}>
          <Text style={styles.bioName}>Okeke Divine Gift</Text>
          <Text style={styles.bioText}>Am a renowned Software Engineer, ML Engineer 🚀</Text>
          <Text style={styles.bioText}>Started My Career at the year 2021, that was the beginning of greatness, now completed over 100 projects...</Text>
        </View>

        {/* Single Wide Action Button (Matches your image layout) */}
        <View style={styles.buttonWrapper}>
          <View style={styles.wideButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </View>
        </View>

        {/* Tab Navigation Grid Bar Icons */}
        <View style={styles.tabBar}>
          <View style={[styles.tabItem, styles.activeTab]}>
            <Text style={styles.tabIcon}>⊞</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabIcon}>👤</Text>
          </View>
        </View>

        {/* Photo Grid Section */}
        <View style={styles.gridContainer}>
          <View style={styles.gridBox}><View style={styles.gridImagePlaceholder} /></View>
          <View style={styles.gridBox}><View style={styles.gridImagePlaceholder} /></View>
          <View style={styles.gridBox}><View style={styles.gridImagePlaceholder} /></View>
          <View style={styles.gridBox}><View style={styles.gridImagePlaceholder} /></View>
          <View style={styles.gridBox}><View style={styles.gridImagePlaceholder} /></View>
          <View style={styles.gridBox}><View style={styles.gridImagePlaceholder} /></View>
          <View style={styles.gridBox}><View style={styles.gridImagePlaceholder} /></View>
          <View style={styles.gridBox}><View style={styles.gridImagePlaceholder} /></View>
          <View style={styles.gridBox}><View style={styles.gridImagePlaceholder} /></View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerName: {
    paddingVertical: 20,
    color: "black",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    width: "100%",
    marginTop: 25,
    paddingBottom: 15,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 15,
  },
  imageContainer: {
    flex: 1,
  },
  logo: {
    width: 86,
    height: 86,
    borderRadius: 43,
  },
  statsCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 2.5,
  },
  statBox: {
    alignItems: "center",
  },
  num: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
  },
  text: {
    fontSize: 13,
    color: "grey",
    marginTop: 2,
  },
  bioContainer: {
    width: "90%",
    alignItems: "flex-start",
    gap: 3,
    marginBottom: 20,
  },
  bioName: {
    fontSize: 15,
    fontWeight: "700",
    color: "black",
  },
  bioText: {
    fontSize: 14,
    color: "black",
    lineHeight: 18,
  },
  buttonWrapper: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  wideButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 0.5,
    borderTopColor: '#DBDBDB',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
  },
  tabIcon: {
    fontSize: 22,
    color: 'black',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  gridBox: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
  },
  gridImagePlaceholder: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
});