import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    // You can check the username and password and navigate to the main screen if they are correct
    if (username === 'user' && password === '1234') {
      navigation.navigate('Home'); // Navigate to the main screen
    } else {
      // Display an error message or handle registration failure
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('./your_logo.png')} style={styles.logo} /> */}
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Email"
        value={username}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleRegister} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login here</Text>
      </TouchableOpacity>
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
