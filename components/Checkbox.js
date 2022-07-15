import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FONTS,SIZES,COLORS,icons} from '../constants'
const Checkbox = ({conatinerStyle, isSelected, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection:"row", ...conatinerStyle,}}>
        <View style={{width:25, height:25, alignItems:'center', justifyContent:'center', borderRadius:SIZES.base, borderWidth:3, borderColor:isSelected ? COLORS.primary : COLORS.grey, backgroundColor:isSelected ? COLORS.primary : null}}>
{isSelected && 
<Image source={icons.checkmark} style={{width:20, height:20, tintColor:COLORS.light}}/>
}
        </View>
        <Text style={{flex:1, marginLeft:SIZES.base, ...FONTS.body5}}>By resgistering, you agree to our terms and Policy.</Text>
    </TouchableOpacity>
  )
}

export default Checkbox

const styles = StyleSheet.create({})