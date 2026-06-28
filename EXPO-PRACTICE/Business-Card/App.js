import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

// Baseline Card Dimensions (3.5" x 2" ratio, scaled for mobile)
const CARD_WIDTH = 340;
const CARD_HEIGHT = 195;

export default function BusinessCard() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      
      {/* Container to handle the overall page alignment */}
      <View style={styles.container}>
        
        {/* Main Business Card Component */}
        <View style={styles.card}>
          
          {/* Header Row (Company and Logo) */}
          <View style={styles.headerRow}>
            <View style={styles.companyStack}>
              <Text style={styles.companyName}>DIVINE GIFT DEVELOPMENTS</Text>
              {/* The "-------------------------" is best styled as a border */}
              <View style={styles.headerUnderline} />
            </View>
            
            {/* [📐 Tech Logo] */}
            <View style={styles.logoContainer}>
              <MaterialCommunityIcons name="developer-board" size={32} color="#4ECDC4" />
            </View>
          </View>
          
          {/* Name/Title Stack (flexDirection: 'column' - default) */}
          <View style={styles.nameTitleStack}>
            <Text style={styles.fullName}>DIVINE GIFT</Text>
            <Text style={styles.jobTitle}>Full Stack Mobile Developer</Text>
          </View>
          
          {/* Contact Details (Icon + Text Rows) */}
          <View style={styles.contactContainer}>
            
            {/* 📱 +234 800 000 0000 */}
            <View style={styles.contactRow}>
              <Entypo name="mobile" size={16} color="#A9A9A9" />
              <Text style={styles.contactText}>+234 800 000 0000</Text>
            </View>
            
            {/* 🌐 github.com/ROXY-BILLION */}
            <View style={styles.contactRow}>
              <Ionicons name="globe-outline" size={16} color="#A9A9A9" />
              <Text style={styles.contactText}>github.com/ROXY-BILLION</Text>
            </View>
            
            {/* 📧 divine@roxybillion.dev */}
            <View style={styles.contactRow}>
              <Ionicons name="mail-outline" size={16} color="#A9A9A9" />
              <Text style={styles.contactText}>divine@roxybillion.dev</Text>
            </View>
            
          </View>
          
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Global page styling (Dark background like the wireframe hint)
  screen: {
    flex: 1,
    backgroundColor: '#1A1A1A', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Centers the card on the screen
    padding: 20,
  },
  
  // -- Card Container (Box Layout) --
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#FFFFFF', // White cardstock like the wireframe
    borderRadius: 12, // Modern rounded corners
    padding: 20,
    justifyContent: 'space-between', // Pushes header/content/footer apart
    
    // Shadows for elevation depth (Crucial for card layouts)
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  
  // -- Header Styling (Top Row) --
  headerRow: {
    flexDirection: 'row', // [Text] [Logo]
    justifyContent: 'space-between', // Spushes them to opposite ends
    alignItems: 'flex-start',
  },
  companyStack: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  companyName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    letterSpacing: 0.5,
  },
  headerUnderline: {
    width: '100%', // Width matches the company name
    height: 2,
    backgroundColor: '#CCCCCC', // Light gray divider
    marginTop: 2, // Spacing from text
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // -- Name/Title Styling (Central Block) --
  nameTitleStack: {
    // Keeps text aligned left, pushed down by the header
    alignItems: 'flex-start', 
    marginTop: -10, // Slight optical adjustment
  },
  fullName: {
    fontSize: 24,
    fontWeight: '800', // Very bold
    color: '#2A2A2A',
    letterSpacing: 1,
  },
  jobTitle: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
    marginTop: 2,
  },
  
  // -- Contact Details (Bottom Block) --
  contactContainer: {
    gap: 6, // Modern spacing between rows
  },
  contactRow: {
    flexDirection: 'row', // [Icon] [Text]
    alignItems: 'center', // Vertical center aligning text and icons
  },
  contactText: {
    fontSize: 12,
    color: '#444444',
    marginLeft: 8, // Spacing from the icon
    fontWeight: '400',
  },
});