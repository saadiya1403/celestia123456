
// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/signup';
import CircleLogo from './components/auth/CircleLogo';
import Login from './screens/login';
import button1 from './components/auth/button1';
import {TouchableOpacity} from "react-native";
import homepage from './screens/homepage';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffe6f7', borderRadius: 24, overflow: 'hidden'}}>
      <CircleLogo/>
      <Text>Welcome To Celestia</Text>
      <Text> </Text>
      <Text>Don't have an account yet?</Text>
      <TouchableOpacity
      style={{
        backgroundColor: '#ff99dd',
        padding: 12,
        borderRadius: 24,
      }}
      onPress={() => navigation.navigate('Signup')}
    >
      <Text style={{ color: 'white' }}>Sign Up Now</Text>
    </TouchableOpacity>
<Text> </Text>
<Text>Log in if you have an account</Text>

         <TouchableOpacity
      style={{
        backgroundColor: '#ff99dd',
        padding: 12,
        borderRadius: 24,
      }}
      onPress={() => navigation.navigate('Login')}
    >
      <Text bold medium center style={{ color: 'white' }}>Log In Now</Text>
    </TouchableOpacity>
<Text> </Text>
<Text>Homepage</Text>
    <TouchableOpacity
      style={{
        backgroundColor: '#ff99dd',
        padding: 12,
        borderRadius: 24,
      }}
      onPress={() => navigation.navigate('Homepage')}
    >
      <Text bold medium center style={{ color: 'white' }}>Homepage</Text>
    </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#80bfff' }}>
      <Text>Details Screen</Text>
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      /> */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
 return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Celestia', headerTintColor:'darkblue' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Celestia', headerTintColor:'darkblue' }} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Celestia', headerTintColor:'darkblue' }}/>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Celestia', headerTintColor:'darkblue' }}/>
        <Stack.Screen name="Homepage" component={homepage} options={{title: 'Celestia', headerTintColor:'darkblue'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;