import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'



export default function WelcomeScreen({navigation}) {
 
  return (
    <View style={styles.container}>
      <View style={{marginTop:150}}>
        <Image style={styles.img} source={require('../assets/woxro1.png')}/>
      </View>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.subHeading}> To India's trusted global website development company that provides full-cycle software development services, e-commerce & Mobile App development</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Tabnavi')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      
      <Text style={styles.bottomText}>© 2020 Woxro Technology Solutions Pvt .Ltd.</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
  },
  heading: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:100,
    fontWeight:'bold'  
  },
  subHeading:{
    fontSize:20.5,
    textAlign:'center',
    padding:15,
    lineHeight:32,
  },
  button: {
    backgroundColor: 'white', 
    alignItems:'center',
    justifyContent:'center',
    height:50,
    width:330,
    marginTop: 50,
    borderColor:'black',
    borderWidth:.9,    
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
  bottomText:{
    fontSize:14,
    marginTop:100,
  }   
})
