import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useStore} from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { COLORS } from './theme';
import { StatusBar } from 'react-native';
import HeaderBar from '../components/HeaderBar';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.lenght; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories: any = Object.keys(temp);
  categories.unshift('All');
  return categories;
};
const getCoffeeList = (category: any, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};
const Homescreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState(undefined);

  const [categorieٰIndex, setCategorieIndex] = useState({
    index: 0,
    category: categories[0],
  });
  // console.log(BeanList);
  const [sortedCoffee, setSortedCoffee] = useState(getCoffeeList(categorieٰIndex.category,CoffeeList));

  const tabBarheight=useBottomTabBarHeight();
  return (
    <View style={styles.ScreenContainer}>
     <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollviewflex}>
      {/* headerBar */}
      <HeaderBar/>
     </ScrollView>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  ScreenContainer:{
    flex: 1,
    backgroundColor:COLORS.primaryBlackHex
  },
  scrollviewflex:{
    flexGrow:1,
  }
});
