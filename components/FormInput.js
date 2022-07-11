import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import {FONTS,SIZES,COLORS} from "../constants"
const FormInput = ({conatinerStyle,
  inputConatinerStyle,
   placeholder, 
   inputStyle, 
   value="", 
   prpendComponent,
appendComponet, 
onChange,
 onPress, 
 ediatable, 
 secureTextEntry,
  keyboardType="default", 
  autoCompleteType="off",
   autoCapitalize="none", 
   maxLength,
placeholderTextColor= COLORS.grey60
}) => {
  return (
    <View style={{...conatinerStyle}}>
      <View style={{flexDirection:"row", height:55, paddingHorizontal:SIZES.radius,
    borderRadius:SIZES.radius, alignItems:'center', 
    backgroundColor:COLORS.lightGrey, ...inputConatinerStyle
    }}>
{prpendComponent}
<TextInput style={{flex:1, paddingVertical:0, ...FONTS.h4, ...inputStyle }}
value={value}
placeholder={placeholder}
placeholderTextColor={placeholderTextColor}
secureTextEntry={secureTextEntry}
keyboardType={keyboardType}
autoCompleteType={autoCompleteType}
autoCapitalize={autoCapitalize}
maxLength={maxLength}
onChange={(text)=>onChange(text)}
onPressIn={onPress}
editable={ediatable}
/>
{appendComponet}
      </View>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({})