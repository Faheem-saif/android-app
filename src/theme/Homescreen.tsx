import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useStore} from '../store/store';

const Homescreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state:any)=> state.BeanList)
  const [categories,setCategories]=useState([undefined])
  const [searchText,setSearchText]=useState(undefined)

  const [categorieٰIndex,setCategorieIndex]=useState({
    index:  0,
    category:categories[0],
  })
  console.log(BeanList);
  

  return (
    <View>
      <Text style={{color:"orange", padding:20}}>Homescreen</Text>
      {BeanList.map(item =>  <Text style={{color:"orange", padding:20}}>{`${item.id}-${item.name}`}</Text> )}
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
