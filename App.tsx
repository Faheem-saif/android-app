import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PaymentScreen from './src/theme/PaymentScreen';
import DetailsScreen from './src/theme/DetailsScreen';
import TabNavigator from './src/navigators/TabNavigator';

const Stack =createNativeStackNavigator();
const App = () => {
  return <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Tab" component={TabNavigator} options={{animation:'slide_from_bottom'}}>

      </Stack.Screen>
      <Stack.Screen name="details" component={DetailsScreen} options={{animation:'slide_from_bottom'}}>

      </Stack.Screen>
      <Stack.Screen name="payment" component={PaymentScreen} options={{animation:'slide_from_bottom'}}>

      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>;
};

export default App;

const styles = StyleSheet.create({});
