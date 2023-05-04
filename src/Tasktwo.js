import { ScrollView,View, StyleSheet, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
  



export default function Tech() {
    const navigation=useNavigation()
    
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Technology and blog</Text>
     
      <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
        <View style={styles.circleContainer}>
            <TouchableOpacity  onPress={() => navigation.navigate('Reactt')}>
          <View style={styles.circle}  >
            <Image style={styles.icon} source={require('../assets/react.png')} />
          </View>
          <Text style={styles.circleText}>React</Text>
          </TouchableOpacity>
        </View>
       
        <View style={styles.circleContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Azure')}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={require('../assets/azure.png')} />
          </View>
          <Text style={styles.circleText}>Azure</Text>
           </TouchableOpacity>
        </View>
       
        <View style={styles.circleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Nodejs')}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={require('../assets/nodejs.png')} />
          </View>
          <Text style={styles.circleText}>Nodejs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.circleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Mangodb')}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={require('../assets/mangodb.png')} />
          </View>
          <Text style={styles.circleText}>Mangodb</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.circleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Laravel')}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={require('../assets/laravel.png')} />
          </View>
          <Text style={styles.circleText}>Laravel</Text>
          </TouchableOpacity>
        
        </View>
        

      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <View style={styles.viewA}><Text style={{fontSize:13}}>Node.js is a open-source cross-platform runtime </Text>
        <Text style={{fontSize:13}}>environment for developing server-side Web applications.</Text></View>
      </View>



      <View style={{alignItems:'center',justifyContent:'center'}}>
      <View style={styles.viewB}><Text style={{fontSize:14,paddingLeft:10}}>Ideas for high returns for investments </Text><Image style={{width:100,height:99,marginLeft:7,borderTopRightRadius:8,borderBottomRightRadius:8}}  source={require('../assets/mann.jpeg')}/>
        </View>
      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <View style={styles.viewC}><Text style={{fontSize:14,paddingLeft:14}}>How Technology made bussiness {'\n'}more efficient </Text><Image style={{width:100,height:99,marginLeft:25,borderTopRightRadius:8,borderBottomRightRadius:8}}  source={require('../assets/tech.jpeg')}/>
        </View>
      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <View style={styles.viewC}><Text style={{fontSize:14,paddingLeft:14}}>Data secure on transitioning to a {'\n'}New Office </Text><Image style={{width:100,height:99,marginLeft:32,borderTopRightRadius:8,borderBottomRightRadius:8}}  source={require('../assets/sec.jpeg')}/>
       </View>
      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <View style={styles.viewC}><Text style={{fontSize:14,paddingLeft:14}}>The Keys to Persuaading Customers{'\n'} Nowadays</Text><Image style={{width:100,height:99,marginLeft:11,borderTopRightRadius:8,borderBottomRightRadius:8}}  source={require('../assets/sec.jpeg')}/>
       </View>
      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <View style={styles.viewC}><Text style={{fontSize:14,paddingLeft:14}}>Blockchain technology effects on {'\n'}logistics sector </Text><Image style={{width:100,height:99,marginLeft:28,borderTopRightRadius:8,borderBottomRightRadius:8}}  source={require('../assets/chain.jpeg')}/>
      </View>
      </View>
     


      </View>
      </ScrollView>












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
    marginHorizontal: 19,
    marginTop:45
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    marginTop: -66,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,


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
  viewA:{
    width:360,
    height:80,
    backgroundColor:'transparent',
    borderRadius:35,
    marginTop:40,
    borderWidth:1,
    borderColor:'#D3D3D3',
    alignItems:'center',
    justifyContent:'center',
    

  },
  viewB:{
    width:360,
    height:100,
    backgroundColor:'transparent',
    borderRadius:10,
    marginTop:50,
    borderWidth:1,
    borderColor:'#D3D3D3',

    flexDirection:'row',
    
    alignItems:'center',

    
    

  },
  viewC:{
    width:360,
    height:100,
    backgroundColor:'transparent',
    borderRadius:10,
    marginTop:4,
    
    borderWidth:1,
    borderColor:'#D3D3D3',
    alignItems:'center',
    flexDirection:'row',

   

  }



 
})