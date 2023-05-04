import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Azure() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Azure</Text>
    
    <Text style={styles.paragraph}>Microsoft Azure, often referred to as Azure, is a cloud computing platform run by Microsoft, which offers access, management, and development of applications and services through global data centers. </Text>
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
  
