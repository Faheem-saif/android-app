import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { COLORS, SPACING } from '../theme/theme'

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image source={require("../assets/app_images/avatar.png")} style={styles.Image}/>
    </View>
  )
}


const styles = StyleSheet.create({
    ImageContainer:{
        height:SPACING.space_36,
        width:SPACING.space_36,
        borderWidth:2,
        borderColor:COLORS.secondaryDarkGreyHex,
        borderRadius:SPACING.space_12,
        justifyContent:"center",
        alignItems:"center",
        overflow:'hidden'

    }
    ,
    Image:{
        height:SPACING.space_36,
        width:SPACING.space_36,
    }
})
export default ProfilePic 