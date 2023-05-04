
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';


import Tabnavi from './src/Tabnavi';
import WelcomeScreen from './src/welcomeScreen';
import Tech from './src/Tasktwo';
import Reactt from './src/React';
import Azure from './src/Azure';
import Nodejs from './src/Nodejs'
import Mangodb from './src/Mangodb';
import Laravel from './src/Laravel'







const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={WelcomeScreen}
        options={{headerShown:false}} />
        <Stack.Screen name='Tabnavi' component={Tabnavi}
        options={{headerShown:false}} />
        <Stack.Screen name='Tech' component={Tech}
        options={{headerShown:false}} />
        <Stack.Screen name='Reactt' component={Reactt}
        options={{headerShown:false}} />
        
        <Stack.Screen name='Azure' component={Azure}
        options={{headerShown:false}} />
        
        <Stack.Screen name='Nodejs' component={Nodejs}
        options={{headerShown:false}} />
        
        <Stack.Screen name='Mangodb' component={Mangodb}
        options={{headerShown:false}} />
        
        <Stack.Screen name='Laravel' component={Laravel}
        options={{headerShown:false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
