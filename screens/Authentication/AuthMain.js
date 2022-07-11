import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { COLORS, images, SIZES } from '../../constants';
import {MotiView,useAnimationState} from "moti"
import {Shadow} from "react-native-shadow-2"
import {
    CountryDropDown, TextButton
} from "../../components";

const AuthMain = () => {
    // States 
    const [mode,  setMode]=useState("signIn")

    // Aniamtion states 
    const animiationState= useAnimationState({
        signIn:{
            height:SIZES.height*0.55
        },
        signUp:{
            height:SIZES.height*0.7
        }
    })

    useEffect(()=>{
animiationState.transitionTo('signIn')
    },[])
    

    // Country
    // const [countries, setCountries] = React.useState([])
    // const [showCountryModal, setShowCountryModal] = React.useState(false)

    // React.useEffect(() => {
        
    //     // Fetch countires
    //     fetch("https://restcountries.com/v2/all")
    //         .then(response => response.json())
    //         .then(data => {
    //             let countryData = data.map(item => {
    //                 return {
    //                     code: item.alpha2Code,
    //                     name: item.name,
    //                     callingCode: `+${item.callingCodes[0]}`,
    //                     flag: `https://countryflagsapi.com/png/${item.alpha2Code}`
    //                 }
    //             })

    //             setCountries(countryData)
    //         })
    // }, [])

    function renderSignIn(){
       return <MotiView state={animiationState} style={{marginTop:SIZES.padding, height:SIZES.height*0.55}}>
            <Shadow>
            <View style={styles.authConatiner}>

</View>
            </Shadow>
        </MotiView>
            
    }
    function renderSignUp(){
        return <MotiView state={animiationState} style={{marginTop:SIZES.padding}}>
        <View style={styles.authConatiner}>

        </View>
    </MotiView>

    }
    function renderAuthContainer() {
        if(mode=="signIn"){
            return renderSignIn()
        }else{
            return renderSignUp()
        }
    }

      
    // Render

    // function renderCountryModal() {
    //     return (
    //         <Modal
    //             animationType="slide"
    //             transparent={true}
    //             visible={showCountryModal}
    //         >
    //             <TouchableWithoutFeedback
    //                 onPress={() => setShowCountryModal(false)}
    //             >
    //                 <View
    //                     style={{
    //                         flex: 1,
    //                         alignItems: 'center',
    //                         justifyContent: 'center',
    //                         backgroundColor: COLORS.dark80
    //                     }}
    //                 >
    //                     <View
    //                         style={{
    //                             height: 400,
    //                             width: SIZES.width * 0.8,
    //                             backgroundColor: COLORS.light,
    //                             borderRadius: SIZES.radius
    //                         }}
    //                     >
    //                         <FlatList
    //                             data={countries}
    //                             keyExtractor={(item) => item.code}
    //                             contentContainerStyle={{
    //                                 paddingHorizontal: SIZES.padding,
    //                                 paddingBottom: SIZES.padding,
    //                             }}
    //                             renderItem={({ item }) => {
    //                                 return (
    //                                     <TouchableOpacity
    //                                         style={{
    //                                             flexDirection: 'row',
    //                                             alignItems: 'center',
    //                                             marginTop: SIZES.radius
    //                                         }}
    //                                         onPress={() => {
    //                                             console.log(item)
    //                                             setSelectedCountry(item)
    //                                             setShowCountryModal(false)
    //                                         }}
    //                                     >
    //                                         <Image
    //                                             source={{ uri: item.flag }}
    //                                             resizeMode="contain"
    //                                             style={{
    //                                                 width: 40,
    //                                                 height: 30
    //                                             }}
    //                                         />
    //                                         <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}>{item.name}</Text>
    //                                     </TouchableOpacity>
    //                                 )
    //                             }}
    //                         />
    //                     </View>
    //                 </View>
    //             </TouchableWithoutFeedback>
    //         </Modal>
    //     )
    // }

    return (
        <View
        style={{
            flex:1,
            paddingHorizontal:SIZES.padding,
            backgroundColor:COLORS.lightGrey
        }}
        >
{/* Logo  */}
<Image source={images.logo} style={{alignSelf:'center', marginTop:SIZES.padding*2, width:50, height:50}}/>

{/* Auth Container  */}
<View>
    {renderAuthContainer()}
</View>
<TextButton label="Togole" onPress={()=>{
    if(animiationState.current==="signIn"){
        animiationState.transitionTo("signUp")
        setMode("signUp")
    }else{
        animiationState.transitionTo("signIn")
        setMode("signIn")
    }
}}/>
        </View>
    )
}
const styles=StyleSheet.create({
    authConatiner:{
      flex:1,
      width:SIZES.width-(SIZES.padding * 2),
      paddingHorizontal:SIZES.padding,
      paddingVertical:SIZES.radius,
      borderRadius:SIZES.radius,
      backgroundColor:COLORS.light
    }
})

export default AuthMain;