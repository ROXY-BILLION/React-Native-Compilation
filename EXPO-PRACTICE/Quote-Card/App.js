import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function QuoteCard() {
  return (
    <View style={styles.quoteCardContainer}>
      
      {/* 1. Italicized Quote Body Text */}
      <Text style={styles.quoteText}>
        "Simplicity is the soul of efficiency. If you master layout alignment rules, complex interfaces become second nature."
      </Text>

      {/* 2. Right-Aligned Author Signature Row */}
      <Text style={styles.authorText}>
        - Anonymous
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  // Main Quote Card Layout using a Left Accent Boundary Frame
  quoteCardContainer: {
    width: '100%',
    marginTop: 100,
    backgroundColor: '#F8FAFC', // Soft off-white backdrop canvas
    paddingVertical: 16,
    paddingHorizontal: 20,
    
    // Exact accent border properties representing the double vertical line style
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6', // Tech Blue accent bar
    
    borderRadius: 4, // Keeps card edges subtly smooth while staying crisp
    gap: 12, // Standard layout space block gap between content segments
  },

  // -- 1. Italicized Body Text Configuration --
  quoteText: {
    fontSize: 16,
    color: '#334155',
    fontStyle: 'italic', // Enforces italicized body representation
    lineHeight: 24, // Matches the explicit line spacing request
    fontWeight: '500',
  },

  // -- 2. Author Component Axis Shift (alignSelf: 'flex-end') --
  authorText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
    alignSelf: 'flex-end', // Overrides default flex alignment to shift right
  },
});