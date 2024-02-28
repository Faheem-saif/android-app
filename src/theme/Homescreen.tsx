import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useStore} from '../store/store';

const Homescreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);


  return (
    <View>
      <Text>Homescreen</Text>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
