import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import Homescreen from '../theme/Homescreen';
import FavouriteScreen from '../theme/FavouriteScreen';
import CartScreen from '../theme/CartScreen';
import OrderHIstory from '../theme/OrderHIstory';
import CustomIcon from '../components/CustomIcon';


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarstyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurviwStyles}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon 
            name="home" size={25}
             color={focused ? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen name="Favouite" component={FavouriteScreen}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <CustomIcon 
          name="like" size={25}
           color={focused ? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex }
          />
        ),
      }}
      ></Tab.Screen>
      <Tab.Screen name="Cart" component={CartScreen} options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon 
            name="cart" size={25}
             color={focused ? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen name="Orders" component={OrderHIstory} 
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <CustomIcon 
          name="bell" size={25}
           color={focused ? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex }
          />
        ),
      }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarstyle: {
    height: 80,
    position: 'absolute',
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    elevation: 0,
    backgroundColor: COLORS.primaryBlackRGBA,
  },
  BlurviwStyles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
