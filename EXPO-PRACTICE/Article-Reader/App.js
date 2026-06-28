import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ArticleReader() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* 1. Top Navigation Row Layout (Sticky Above Scroll) */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="arrow-back" size={24} color="#111111" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="bookmark-outline" size={22} color="#111111" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Body Container */}
      <ScrollView contentContainerStyle={styles.scrollBody} showsVerticalScrollIndicator={false}>
        
        {/* 2. Main Title Header */}
        <Text style={styles.mainTitle}>
          Mastering React Native Layouts without Types
        </Text>

        {/* 3. Small Caption Text */}
        <Text style={styles.captionText}>
          By Divine Gift • 4 min read • June 2026
        </Text>

        {/* 4. Fixed-Aspect-Ratio Image Element */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600' }} 
            style={styles.articleImage}
            resizeMode="cover"
          />
        </View>

        {/* 5. Core Paragraph Text Components */}
        <View style={styles.articleContent}>
          <Text style={styles.paragraph}>
            React Native makes building mobile screens fast. By understanding Flexbox axes, 
            you can build dynamic user interfaces that adapt perfectly to both small screens 
            and larger tablet windows.
          </Text>
          
          <Text style={styles.paragraph}>
            Unlike standard web development where block layouts default to vertical flows 
            and inline elements sit side-by-side, React Native enforces a default 
            vertical column coordination. Mastering this behavior eliminates layout shifts 
            completely.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Clean editorial canvas
  },
  
  // -- 1. Top Navigation Row (flexDirection: 'row') --
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Pins back icon to left, save to right
    alignItems: 'center',
    paddingHorizontal: 16,
    height: Platform.OS === 'ios' ? 90 : 60,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  navButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // -- Scroll Setup --
  scrollBody: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },

  // -- 2. Main Title Header (font-weight: 800) --
  mainTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111111',
    lineHeight: 34,
    letterSpacing: -0.5,
  },

  // -- 3. Small Caption Text (Lighter Color) --
  captionText: {
    fontSize: 14,
    color: '#666666',
    marginTop: 12,
    marginBottom: 24,
    fontWeight: '500',
  },

  // -- 4. Image Container (Fixed Aspect Ratio 16:9) --
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9, // Guarantees crisp scaling without hardcoded heights
    borderRadius: 12,
    overflow: 'hidden', // Forces inner image to respect rounded bounds
    backgroundColor: '#F5F5F5',
    marginBottom: 24,
  },
  articleImage: {
    width: '100%',
    height: '100%',
  },

  // -- 5. Core Paragraph Structure --
  articleContent: {
    gap: 16, // Clean spacing between distinct text components
  },
  paragraph: {
    fontSize: 16,
    color: '#2C2C2C',
    lineHeight: 26, // Increased line height for editorial comfort
    fontWeight: '400',
  },
});