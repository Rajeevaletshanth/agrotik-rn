import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setEmail] = useState('user');
  const [password, setPassword] = useState('1234');

  const handleLogin = () => {
    // Implement your login logic here
    // You can check the username and password and navigate to the main screen if they are correct
    if (username === 'user' && password === '1234') {
      navigation.navigate('Dashboard'); // Navigate to the main screen
    } else {
      // Display an error message or handle authentication failure
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('./your_logo.png')} style={styles.logo} /> */}
      <Text style={styles.title}>Welcome back!</Text>
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
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>New user? Register here</Text>
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
