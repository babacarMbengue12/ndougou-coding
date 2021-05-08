import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Intro from "./components/Intro"
import Register from "./components/Register"
import Login from "./components/Login"
import LoginPhone from "./components/LoginPhone"

const Stack = createStackNavigator()
export default function App() {
  return (
    
      <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen options={{headerShown: false}} name="Intro" component={Intro} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
         <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="LoginPhone" component={LoginPhone} />
        </Stack.Navigator>
         </NavigationContainer>
         
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
