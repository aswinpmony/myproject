import { View, StyleSheet, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
  



export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={require('../assets/coupon.png')} />
          </View>
          <Text style={styles.circleText}>Coupon</Text>
        </View>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={require('../assets/ads.png')} />
          </View>
          <Text style={styles.circleText}>Ads</Text>
        </View>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={require('../assets/quatation.png')} />
          </View>
          <Text style={styles.circleText}>Quotation</Text>
        </View>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={require('../assets/brochure.webp')} />
          </View>
          <Text style={styles.circleText}>Brochure</Text>
        </View>
      </View>


<View style={styles.boxContainer} >
<View style={styles.box}>
  <Image style={{width:180,height:83,borderRadius:8}} source={require('../assets/contactus.jpg')}/>
</View>
<View 
style={styles.box}>
   <Image style={{width:180,height:83,borderRadius:8}} source={require('../assets/contactus.jpg')}/>
</View>
</View>
<View style={styles.boxContainer}>
<View style={styles.boxA}><Text style={styles.boxText}>About Us</Text>
<Text style={styles.subText}> All Kind of IT services that vou your success </Text>
</View>
<View style={styles.boxA}><Text style={styles.boxText}>Service</Text>
<Text style={styles.subText}>We provide truly prominant IT solutions</Text></View>
</View>

<View style={{marginTop:15}}>

<View style={styles.boxContainer} >
<View style={styles.box}>
<Image style={{width:180,height:83,borderRadius:8}} source={require('../assets/contactus.jpg')}/>
</View>
<TouchableOpacity onPress={() => navigation.navigate('Tech')} >
<View style={styles.box}>
<Image style={{width:180,height:83,borderRadius:8}} source={require('../assets/contactus.jpg')}/>
</View>
</TouchableOpacity>
</View>
<View style={styles.boxContainer}>
<View style={styles.boxA}><Text style={styles.boxText}>Management</Text>
<Text style={styles.subText}>Know more about our Management</Text></View>
<TouchableOpacity onPress={() => navigation.navigate('Tech')}>
<View style={styles.boxA} >
  <Text style={styles.boxText} >Technology</Text>
<Text style={styles.subText}>Discover our range of Technology</Text></View>
</TouchableOpacity>
</View>
</View>

<View style={{marginTop:15}}>

<View style={styles.boxContainer} >
<View style={styles.box}>
<Image style={{width:180,height:83,borderRadius:8}} source={require('../assets/contactus.jpg')}/>
</View>
<View style={styles.box}>
<Image style={{width:180,height:83,borderRadius:8}} source={require('../assets/contactus.jpg')}/>
</View>
</View>
<View style={styles.boxContainer}>
<View style={styles.boxA}><Text style={styles.boxText}>Contact Us</Text>
<Text style={styles.subText}> Get in touch with us for more information</Text></View>
<View style={styles.boxA}><Text style={styles.boxText}>Hosting</Text>
<Text style={styles.subText}>Hosting with powerful linux platform</Text>
</View>
</View>
</View>




</View>







  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 90,
    marginHorizontal: 30,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: -55,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,


    borderColor: '#D3D3D3',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 35,
    height: 30,
  },
  circleText: {
    marginTop: 5,
    marginLeft: -10,
    fontSize: 14,
    color: '#333',
    alignItems: 'center',
    padding: 1,
    paddingLeft: 16,
  },
  boxContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  
  },
  box:{
    width:180,
    height:83,
    backgroundColor:'blue',
    marginRight:10,
    marginLeft:10,
    borderTopEndRadius:10,
    borderTopStartRadius:10

  },
  boxA:{
    width:180,
    height:83,
    backgroundColor:'white',
    marginRight:10,
    marginLeft:10,
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
    borderColor:'#D3D3D3',
    borderWidth:.5

 
  },
  boxText:{
    fontSize:20,
    padding:7,
    marginLeft:4,
    textAlign:'left',
    color:'black',
    fontWeight:'bold'
    

  },
  subText:{
    fontSize:15,
    padding:3,
    textAlign:'left',
    color:"gray",
    
    marginTop:-5
    


  }
 
})
