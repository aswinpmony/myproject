import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Laravel() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Laravel</Text>
    <Text style={styles.paragraph}>Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony </Text>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 16,
      textAlign: 'center',
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'justify',
    },
  });
  
