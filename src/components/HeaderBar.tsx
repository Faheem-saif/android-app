import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import GradientBGIcon from './GradientBGIcon'
import ProfilePic from './ProfilePic'



interface headerbarProps{
    title?:string
}
const HeaderBar:React.FC<headerbarProps> = ({title}) => {
  return (
    <View style={styles.HeaderConatainer}>
        <GradientBGIcon
         name="menu"
         color={COLORS.primaryLightGreyHex}
         size={FONTSIZE.size_16}
        />
      <Text style={styles.HeaderText} >{title}</Text>
      <ProfilePic/>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
    HeaderConatainer:{
        flexDirection:"row",
       padding:SPACING.space_30,
       alignItems:"center",
       justifyContent:"space-between" 
    },
    HeaderText:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_20,
        color:COLORS.primaryWhiteHex,
    }
})