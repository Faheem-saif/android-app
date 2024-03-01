import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from './theme';
import {StatusBar} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};

  for (let i = 0; i < data.length; i++) {
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

  const [searchText, setSearchText] = useState('');

  const [categorieٰIndex, setCategorieIndex] = useState({
    index: 1,
    category: categories[0],
  });

  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categorieٰIndex.category, CoffeeList),
  );

  const tabBarheight = useBottomTabBarHeight();
  console.log("sortedcoffe",sortedCoffee.length);

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollviewflex}>
        {/* headerBar */}
        <HeaderBar title="Faheem" />
        <Text style={styles.Screentitle}>
          Find the best {'\n'}Coffee for You
        </Text>
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon
              style={styles.InputIcon}
              name="search"
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
              size={FONTSIZE.size_18}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.InputTextContainer}
            placeholder="Find your best coffee.."
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
          />
        </View>

        {/* Categries */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollViewStyle}>
          {categories.map((data: any, index: any) => (
            <View
              key={index.toString()}
              style={styles.categoriesScrollviewContainer}>
              <TouchableOpacity
                style={styles.categoryScrollViewItem}
                onPress={() => {
                  setCategorieIndex({
                    index: index,
                    category: categories[index],
                  });
                  setSortedCoffee([...getCoffeeList(categories[index],CoffeeList)]);
                }}>
                <Text
                  style={[
                    styles.CategoriesText,
                    categorieٰIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categorieٰIndex.index==index ? (
                  <View style={styles.activeCategory}/>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        flatlist coffeelist
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollviewflex: {
    flexGrow: 1,
  },
  Screentitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  InputTextContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  categoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  datastyle: {},
  categoriesScrollviewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  categoryScrollViewItem: {
    alignItems: 'center',
  },
  activeCategory: {
    width: SPACING.space_10,
    height: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  CategoriesText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
});

export default Homescreen;
