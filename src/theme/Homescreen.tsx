import React, {useRef, useState} from 'react';
import {
  FlatList,
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
import CoffeeCard from '../components/CoffeeCard';
import CoffeeData from '../data/CoffeeData';

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
    index: 0,
    category: categories[0],
  });

  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categorieٰIndex.category, CoffeeList),
  );

  const ListRef: any = useRef<FlatList>();
  const tabBarheight = useBottomTabBarHeight();

  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animate: true,
        offset: 0,
      });
      setCategorieIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) => {
          item.name.toLowerCase().includes(search.toLowerCase());
        }),
      ]);
    
      
    }
  };
  const resetSearch = () => {
    ListRef?.current?.scrollToOffset({
      animate: true,
      offset: 0,
    });
    setCategorieIndex({index: 0, category: categories[0]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };

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
          <TouchableOpacity
            onPress={() => {
              searchCoffee(searchText);
            }}>
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
          {searchText.length > 0 ? (
            <TouchableOpacity
            onPress={()=>{
              resetSearch()
            }}>
              <CustomIcon
                style={styles.InputIcon}
                name="close"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
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
                  ListRef?.current?.scrollToOffset({
                    animate: true,
                    offset: 0,
                  });
                  setCategorieIndex({
                    index: index,
                    category: categories[index],
                  });
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                  ]);
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
                {categorieٰIndex.index == index ? (
                  <View style={styles.activeCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/* flatlist coffeelist */}
        <FlatList
          ref={ListRef}
          ListEmptyComponent={<View>
            <Text style={styles.CategoriesText}>
               Sorry! Faheem 
            </Text>
          </View>}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roased}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredients={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  pressButtonhandler={() => {}}
                />
              </TouchableOpacity>
            );
          }}
          data={sortedCoffee}
        />
        {/* flatlist BeanList */}
        <Text style={styles.CofeeBeanTitle}>Cofee Beans</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.FlatListContainer,
            {marginBottom: tabBarheight},
          ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roased}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredients={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  pressButtonhandler={() => {}}
                />
              </TouchableOpacity>
            );
          }}
          data={BeanList}
        />
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
  EmptyListConatainer:{
    justifyContent:'center'
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
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  CofeeBeanTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    color: COLORS.primaryLightGreyHex,
  },
});

export default Homescreen;
