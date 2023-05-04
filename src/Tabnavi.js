import React from "react";
import {
    Text,View
}from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Call from "./Call";
import Location from "./Location";
import Ib from "./Ib";
const Tabnavi=()=>{
    const Tab= createBottomTabNavigator();
    return(

<Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown:false, tabBarShowLabel:false,   tabBarIcon:({tintColor})=>(  
              <Icon name="ios-home-outline" color={tintColor} size={25}/>  
          )  }} />
        <Tab.Screen name="Call" component={Call}  options={{headerShown:false,tabBarShowLabel:false,   tabBarIcon:({tintColor})=>(  
              <Icon name="ios-call-outline" color={tintColor} size={25}/>  
          )  }} />   
        <Tab.Screen name="Ib" component={Ib} options={{headerShown:false, tabBarShowLabel:false,  tabBarIcon:({tintColor})=>(  
              <Icon name="chatbubble-ellipses-outline" color={tintColor} size={25}/>  
          )  }} />
        <Tab.Screen name="Location" component={Location} options={{headerShown:false,tabBarShowLabel:false,   tabBarIcon:({tintColor})=>(  
              <Icon name="ios-location-outline" color={tintColor} size={25}/>  
          )  }} />
      </Tab.Navigator>


    )
}
export default Tabnavi;