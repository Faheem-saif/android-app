import {
  Dimensions,
  ImageBackground,
  ImageProps,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import BGIcon from './BGIcon';
const Card_width = Dimensions.get('window').width * 0.32;
interface CardCoffeeProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: ImageProps;
  name: string;
  special_ingredients: string;
  average_rating: number;
  price: any;
  pressButtonhandler: any;
}
const CoffeeCard: React.FC<CardCoffeeProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredients,
  average_rating,
  price,
  pressButtonhandler,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.LinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground source={imagelink_square} style={styles.CardImageBG}>
        <View style={styles.CardRatingConatainer}>
          <CustomIcon name="star" color={COLORS.primaryOrangeHex} />

          <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.CardTitle}>{name}</Text>
      <Text style={styles.CardSubTitle}>{special_ingredients}</Text>
      <View style={styles.CardFooterRow}>
        <Text style={styles.CardPiceCurrency}>
          $<Text style={styles.CardPrice}>{price.price}</Text>
        </Text>
        <TouchableOpacity>
          <BGIcon
            name={'add'}
            color={COLORS.primaryWhiteHex}
            size={FONTSIZE.size_10}
            BGcolor={COLORS.primaryOrangeHex}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({
  LinearGradientContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CardImageBG: {
    height: Card_width,
    width: Card_width,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingConatainer: {
    flexDirection: 'row',

    backgroundColor: COLORS.primaryBlackRGBA,
    justifyContent: 'center',
    alignItems: 'center',

    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
  CardRatingText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.poppins_medium,
    lineHeight: 22,
    color: COLORS.primaryWhiteHex,
  },
  CardFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.space_15,
  },
  CardTitle: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,

    color: COLORS.primaryWhiteHex,
  },
  CardSubTitle: {
    fontSize: FONTSIZE.size_10,
    fontFamily: FONTFAMILY.poppins_light,

    color: COLORS.primaryWhiteHex,
  },
  CardPiceCurrency: {
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_semibold,

    color: COLORS.primaryOrangeHex,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
});
