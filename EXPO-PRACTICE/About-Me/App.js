import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, Platform } from 'react-native';
import Profile from './assets/profile.jpg'



export default function AboutMeApp() {
  const myStack = ['#React-Nat', '#JavaScriptJS', '#FlexboxUI'];
  const myInterests = [
    { icon: '🎮', label: 'Game Logic' },
    { icon: '🎨', label: 'UI Transitions' },
    { icon: '🚀', label: 'Coding' }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      
      {/* 1. Simple App Bar (Header Row) */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>ABOUT ME</Text>
      </View>

      {/* Main Content Area - Wrapped in ScrollView for scrollability */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* 2. Centralized Profile Avatar (O) */}
        <View style={styles.avatarBlock}>
          <Image 
            source={Profile} 
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Divine Gift</Text>
        </View>

        {/* 3. Bio / Tagline (Italicized) */}
        <View style={styles.bioContainer}>
          <Text style={styles.bioText}>
            "Building sleek, frontend-first mobile interfaces using React Native and Expo"
          </Text>
        </View>

        {/* 4. My Stack (Horizontal Badges with Wrap) */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionLabel}>My Stack</Text>
            <View style={styles.sectionDivider} />
          </View>
          
          <View style={styles.stackBadgesContainer}>
            {myStack.map((tech, index) => (
              <View key={index} style={styles.techBadge}>
                <Text style={styles.techBadgeText}>{tech}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 5. Interests (Text Columns) */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionLabel}>Interests</Text>
            <View style={styles.sectionDivider} />
          </View>
          
          <View style={styles.interestsContainer}>
            {myInterests.map((interest, index) => (
              <View key={index} style={styles.interestItem}>
                <Text style={styles.interestIcon}>{interest.icon}</Text>
                <Text style={styles.interestLabel}>{interest.label}</Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // -- Parent Layout and Scrolling --
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC', // Clean, light background
  },
  scrollContent: {
    paddingBottom: 40, // Space at the bottom for comfortable scrolling
  },

  // -- 1. App Bar (Simple Top Header) --
  appBar: {
    height: Platform.OS === 'ios' ? 90 : 60, // Adjust for iOS notch
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: '#4A90E2', // Professional blue header
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    zIndex: 10,
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },

  // -- 2. Avatar Block (Centered Profile Image/Name) --
  avatarBlock: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Perfect circle (width/2)
    borderWidth: 4,
    borderColor: '#FFFFFF', // Clean border
    marginBottom: 16,
    backgroundColor: '#E1E8EE', // Placeholder color while image loads
  },
  profileName: {
    fontSize: 24,
    fontWeight: '800', // Extra bold name
    color: '#333333',
    textAlign: 'center',
  },

  // -- 3. Bio / Tagline (Centralized Italic Block) --
  bioContainer: {
    marginTop: 24,
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  bioText: {
    fontSize: 16,
    color: '#666666',
    fontStyle: 'italic', // As requested in wireframe
    lineHeight: 24, // Comfortable reading height
    textAlign: 'center',
  },

  // -- Section Styling (Reusable Headers) --
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#999999',
    textTransform: 'uppercase', // "My Stack" "Interests"
    marginRight: 10,
    letterSpacing: 1,
  },
  sectionDivider: {
    flex: 1, // Takes up remaining horizontal space
    height: 1,
    backgroundColor: '#E1E8EE', // Light gray line
  },

  // -- 4. My Stack (Badges with Wrap) --
  stackBadgesContainer: {
    flexDirection: 'row', // Flow elements horizontally
    flexWrap: 'wrap', // **Essential for badge layouts**
    gap: 10, // Modern spacing (adds gap between rows and columns)
    // justifyContent: 'center', // Optional: Center the group of badges
  },
  techBadge: {
    backgroundColor: '#EBF3FB', // Soft blue background for tags
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20, // Fully pill-shaped rounded badge
    borderWidth: 1,
    borderColor: '#D0E1F3',
  },
  techBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A90E2', // Match header color
  },

  // -- 5. Interests (Icon + Text Columns) --
  interestsContainer: {
    flexDirection: 'row', // Layout columns horizontally
    justifyContent: 'space-around', // Spread them evenly
    marginTop: 10,
    flexWrap: 'wrap', // Safe wrap for smaller screens
    gap: 15,
  },
  interestItem: {
    alignItems: 'center', // Centralizes content inside column
    width: '30%', // Controls column width
    minWidth: 90,
  },
  interestIcon: {
    fontSize: 32, // Large emojis
    marginBottom: 8,
  },
  interestLabel: {
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
    fontWeight: '500',
  },
});