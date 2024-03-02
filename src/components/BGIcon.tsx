import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon'
import { BORDERRADIUS, SPACING } from '../theme/theme'




interface BGIconProps{
    name:string,
    size:number,
    color:string,
    BGcolor:string
}
const BGIcon:React.FC<BGIconProps> = ({name,color,size,BGcolor}) => {
  return (
    <View style={[styles.IconBG,{backgroundColor:BGcolor}]} >
      <CustomIcon
      name={name}
      size={size}
      color={color}
      />
    </View>
  )
}

export default BGIcon

const styles = StyleSheet.create({
    IconBG:{
        height:SPACING.space_30,
        width:SPACING.space_30,
        borderRadius:BORDERRADIUS.radius_8,
        justifyContent:'center',
        alignItems:'center',
    }
})