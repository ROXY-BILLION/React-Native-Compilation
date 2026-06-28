import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginUI() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.formContainer}>
      
      {/* Heading Text */}
      <Text style={styles.heading}>WELCOME</Text>

      {/* Email Input View */}
      <TextInput
        style={styles.input}
        placeholder="Enter email address..."
        placeholderTextColor="#94A3B8"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input View */}
      <TextInput
        style={styles.inputRow}
        placeholder="Enter password..."
        placeholderTextColor="#94A3B8"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />

      {/* Touchable Button */}
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    paddingHorizontal: 4,
  },
  
  // -- Heading Layout --
  heading: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 36,
    letterSpacing: 1,
  },

  // -- Base Input Style --
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#334155',
    backgroundColor: '#F8FAFC',
  },

  // -- Input View with custom margin override --
  inputRow: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#334155',
    backgroundColor: '#F8FAFC',
    marginVertical: 16, // marginVertical handles the precise gap spacing between blocks
  },

  // -- Touchable Button Style --
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#2563EB', // Vibrant tech blue
    borderRadius: 8,
    justifyContent: 'center', // Centers text vertically
    alignItems: 'center', // Centers text horizontally
    marginTop: 8,
  },
  
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});