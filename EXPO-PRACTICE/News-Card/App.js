import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function NewsCard() {
  return (
    <View style={styles.cardContainer}>
      
      {/* Top Body Row Grouping */}
      <View style={styles.bodyRow}>
        
        {/* Left Aspect-Ratio Image Thumbnail */}
        <View style={styles.thumbnailContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300' }} 
            style={styles.thumbnail}
            resizeMode="cover"
          />
        </View>

        {/* Right Information Stack (flex: 1 keeps text from overflowing bounds) */}
        <View style={styles.infoStack}>
          <Text style={styles.titleText} numberOfLines={2}>
            Tech Trends Move to Mobile App UI
          </Text>
          <Text style={styles.descriptionText} numberOfLines={3}>
            The shift toward cross-platform frameworks accelerates as teams prioritize rapid iteration...
          </Text>
        </View>

      </View>

      {/* Card Footer Row */}
      <View style={styles.footerRow}>
        <Text style={styles.footerText}>June 2026 • 3 min read</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  
  // -- Horizontal Layout Pairing (Image Left | Stack Right) --
  bodyRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  
  // -- Fixed Size Thumbnail Frame --
  thumbnailContainer: {
    width: 90,
    height: 90,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },

  // -- Text Component Containment Shell --
  infoStack: {
    flex: 1, // CRITICAL: Gives text a defined boundary so it wraps safely inside the container width
    marginLeft: 14,
    gap: 6, // Controls spacing between title and description snippet
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    lineHeight: 22,
  },
  descriptionText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },

  // -- Footer Layout Structure --
  footerRow: {
    marginTop: 14,
    borderTopWidth: 1,
    borderColor: '#F1F5F9',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#94A3B8',
  },
});