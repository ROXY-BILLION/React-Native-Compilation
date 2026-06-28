import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* 1. Standard Dashboard Navigation Row */}
      <View style={styles.navBar}>
        <TouchableOpacity><Ionicons name="home-outline" size={22} color="#333" /></TouchableOpacity>
        <Text style={styles.navTitle}>COMPANY DETAILS</Text>
        <TouchableOpacity><Feather name="settings" size={22} color="#333" /></TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollBody}>
        
        {/* 2. Flex Row Branding Layout */}
        <View style={styles.brandingCard}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>
          <View style={styles.infoStack}>
            <Text style={styles.companyName}>Roxy-Billion Solutions Inc</Text>
            <Text style={styles.infoText}>📍 Anambra, Nigeria</Text>
            <Text style={styles.infoText}>🌐 www.roxybillion.dev</Text>
          </View>
        </View>

        {/* 3. Dashboard Statistics Grid (Row Container sharing 2 flex components) */}
        <View style={styles.statsGrid}>
          <View style={[styles.statBox, styles.shadowEffect]}>
            <Text style={styles.statLabel}>Projects Launched</Text>
            <Text style={styles.statNumber}>12</Text>
          </View>
          
          <View style={[styles.statBox, styles.shadowEffect]}>
            <Text style={styles.statLabel}>Active Clients</Text>
            <Text style={styles.statNumber}>45</Text>
          </View>
        </View>

        {/* 4. Segmented Horizontal Tab Control Menu Bar */}
        <View style={styles.tabMenuBar}>
          {['Overview', 'Products', 'Team'].map((tab) => (
            <TouchableOpacity 
              key={tab} 
              style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 5. Dynamic Description Area */}
        <View style={styles.descriptionArea}>
          {activeTab === 'Overview' && (
            <>
              <Text style={styles.bodyHeading}>Mission Statement:</Text>
              <Text style={styles.bodyText}>
                To craft ultra-fast, robust mobile applications with pixel-perfect precision...
              </Text>
            </>
          )}
          {activeTab === 'Products' && (
            <>
              <Text style={styles.bodyHeading}>Our Core Suite:</Text>
              <Text style={styles.bodyText}>
                • Enterprise Native Frameworks{"\n"}
                • Custom Hybrid Mobile Systems
              </Text>
            </>
          )}
          {activeTab === 'Team' && (
            <>
              <Text style={styles.bodyHeading}>Engineering Office:</Text>
              <Text style={styles.bodyText}>
                Led by Divine Gift alongside our world-class remote UI/UX engineers.
              </Text>
            </>
          )}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  
  // -- 1. Navigation Header --
  navBar: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: Platform.OS === 'ios' ? 90 : 60,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  navTitle: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
    color: '#333',
  },
  scrollBody: {
    padding: 20,
  },

  // -- 2. Branding Row Layout --
  brandingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: 20,
  },
  logoBox: {
    width: 65,
    height: 65,
    backgroundColor: '#1E293B',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoStack: {
    marginLeft: 16,
    flex: 1,
    gap: 4,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  infoText: {
    fontSize: 13,
    color: '#64748B',
  },

  // -- 3. Grid Row Component Distribution --
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Splits space evenly
    marginBottom: 24,
  },
  statBox: {
    width: '48%', // Guarantees math space checks across all screen aspect views
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#3B82F6',
  },
  shadowEffect: {
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  // -- 4. Segmented Tab Layout Component Bar --
  tabMenuBar: {
    flexDirection: 'row',
    backgroundColor: '#E2E8F0',
    padding: 4,
    borderRadius: 8,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTabButton: {
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
  },
  activeTabText: {
    color: '#0F172A',
  },

  // -- 5. Dynamic Description Box Area --
  descriptionArea: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  bodyHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
  },
});