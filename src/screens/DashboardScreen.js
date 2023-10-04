import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Temperature from '../components/Temperature';

export default function DashboardScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Temperature/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 5,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  link: {
    marginTop: 10,
    color: '#007BFF',
    fontSize: 16,
  },
});
