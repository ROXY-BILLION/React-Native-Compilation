import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.cardContainer}>
      
      {/* 1. Circular Avatar Frame */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.avatar} 
        />
      </View>

      {/* 2. Text Meta Stack */}
      <Text style={styles.nameText}>Divine Gift</Text>
      <Text style={styles.locationText}>Anambra, Nigeria</Text>

      {/* 3. Stat Row Component Grid */}
      <View style={styles.statsRow}>
        
        <View style={styles.statColumn}>
          <Text style={styles.statLabel}>Followers</Text>
          <Text style={styles.statNumber}>1.2k</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statColumn}>
          <Text style={styles.statLabel}>Following</Text>
          <Text style={styles.statNumber}>450</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statColumn}>
          <Text style={styles.statLabel}>Projects</Text>
          <Text style={styles.statNumber}>24</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  // Main Card Container with Cross-Platform Elevation
  cardContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center', // Centers avatar, names, and row elements down the middle
    borderWidth: 1,
    borderColor: '#F1F5F9',
    ...Platform.select({
      ios: {
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  // -- 1. Avatar Core Calculations (borderRadius: width / 2) --
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F8FAFC',
    borderWidth: 3,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    marginBottom: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },

  // -- 2. Typography Definitions --
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
  },
  locationText: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4, // Exact spacing shift from wireframe specifications
    marginBottom: 24,
  },

  // -- 3. Horizontal Stat Layout Block --
  statsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around', // Spaces column components symmetrically 
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  statColumn: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#94A3B8',
    marginBottom: 4,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155',
  },
  
  // Subtle vertical line separators between numbers
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#E2E8F0',
  },
});