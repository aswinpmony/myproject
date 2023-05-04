import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Reactt() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>React</Text>
    
    <Text style={styles.paragraph}>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.  </Text>
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
  
