import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Mangodb() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Mangodb</Text>
   
    <Text style={styles.paragraph}>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions </Text>
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
  
