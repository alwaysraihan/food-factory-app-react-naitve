import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import {MotiView,useAnimationState} from "moti"
import {Shadow} from "react-native-shadow-2"
import {
    CountryDropDown, TextButton,FormInput, IconButton, Checkbox
} from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
const AuthMain = () => {
    // States 
    const [mode,  setMode]=useState("signIn")

    // input states 
    const [email, setEmail]=useState("")
    const [name, setName]=useState("")
    const [phone, setPhone]=useState("")
    const [passworad, setPasswoard]=useState("")
    const [selectedCountry, setSelectedCountry]=useState(null)
    
    // checkobox states 
    const [checkbox, setCheckbox]=useState(false)

    // passworad icon visible or not visible states 
    const [isVisible, setisVisible]=useState(false)

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
    const [countries, setCountries] =useState([])
    const [showCountryModal, setShowCountryModal] =useState(false)

    React.useEffect(() => {
        
        // Fetch countires
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => {
                let countryData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://countryflagsapi.com/png/${item.alpha2Code}`
                    }
                })

                setCountries(countryData)
            })
    }, [])

    function renderSignIn(){
       return <MotiView state={animiationState} style={{marginTop:SIZES.padding, height:SIZES.height*0.55}}>
            <Shadow>
            <View style={styles.authConatiner}>
<Text style={{width:"80%", lineHeight:45, color:COLORS.dark,...FONTS.h1}}>
    Sign in to continue
</Text>
<KeyboardAwareScrollView enableOnAndroid={true} keyboardDismissMode="on-drag" keyboardShouldPersistTaps={"handled"} extraHeight={-300} contentContainerStyle={{ flexGrow:1, justifyContent:'center'}}>
    {/* Email  */}
<FormInput conatinerStyle={{
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.error,
 
}} 
placeholder="Email"
value={email}
onChange={(text)=>setEmail(text)}

 prpendComponent ={
    <Image source={icons.email}
    style={{width:25, height:25, marginRight:SIZES.base}}
    />
 }
/>

{/* pasworad  */}
<FormInput conatinerStyle={{
    marginTop:SIZES.radius,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.error,
}} 
placeholder="Password"
value={passworad}
secureTextEntry={!isVisible}
onChange={(text)=>setPasswoard(text)}
 prpendComponent ={
    <Image source={icons.lock}
    style={{width:25, height:25, marginRight:SIZES.base}}
    />
 }
 appendComponet={
    <IconButton 
    icon={isVisible ?icons.eye_off: icons.eye} 
    iconStyle={{tintColor:COLORS.grey}}
    onPress={()=>setisVisible(!isVisible)}
    />
 }
/>
<View style={{ alignItems:'flex-end'}}>
<TextButton label="Forgot Password" contentContainerStyle={{marginTop:SIZES.radius, backgroundColor:null}} labelStyle={{
    color:COLORS.support3,
    ...FONTS.h4

}}/>
</View>

</KeyboardAwareScrollView>
<TextButton label="Log In" contentContainerStyle={{height:55, marginTop:SIZES.radius, borderRadius:SIZES.radius, backgroundColor:COLORS.primary}} labelStyle={{
    
    ...FONTS.h3

}}
onPress={()=>console.log("Log In Success")}
/>

</View>
            </Shadow>
        </MotiView>
            
    }
    function renderSignUp(){
        return (
          
                <MotiView state={animiationState} style={{marginTop:SIZES.padding}}>
        <View style={styles.authConatiner}>
        <Text style={{width:"80%", lineHeight:45, color:COLORS.dark,...FONTS.h1}}>Create new account
</Text>
<KeyboardAwareScrollView enableOnAndroid={true} keyboardDismissMode="on-drag" keyboardShouldPersistTaps={"handled"} extraHeight={-300} contentContainerStyle={{ flexGrow:1, marginTop:SIZES.padding, paddingBottom:SIZES.padding*2}}>
    {/* name  */}
    <FormInput conatinerStyle={{
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.error,
 
}} 
placeholder="Name"
value={name}
onChange={(text)=>setName(text)}

 prpendComponent ={
    <Image source={icons.person}
    style={{width:25, height:25, marginRight:SIZES.base}}
    />
 }
/>
    {/* Email  */}
<FormInput conatinerStyle={{
     marginTop:SIZES.radius,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.error,
 
}} 
placeholder="Email"
value={email}
onChange={(text)=>setEmail(text)}

 prpendComponent ={
    <Image source={icons.email}
    style={{width:25, height:25, marginRight:SIZES.base}}
    />
 }
/>
{/* Phone Number  */}
<FormInput conatinerStyle={{
     marginTop:SIZES.radius,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.error,
 
}} 
placeholder="Phone"
value={phone}
onChange={(text)=>setPhone(text)}
 prpendComponent ={
    <Image source={icons.phone}
    style={{width:25, height:25, marginRight:SIZES.base}}
    />
 }
/>
<CountryDropDown containerStyle={{ marginTop:SIZES.radius,}} onPress={()=>setShowCountryModal(!showCountryModal)} selectedCountry={selectedCountry}/>

{/* pasworad  */}
<FormInput conatinerStyle={{
    marginTop:SIZES.radius,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.error,
}} 
placeholder="Password"
value={passworad}
secureTextEntry={!isVisible}
onChange={(text)=>setPasswoard(text)}
 prpendComponent ={
    <Image source={icons.lock}
    style={{width:25, height:25, marginRight:SIZES.base}}
    />
 }
 appendComponet={
    <IconButton 
    icon={isVisible ?icons.eye_off: icons.eye} 
    iconStyle={{tintColor:COLORS.grey}}
    onPress={()=>setisVisible(!isVisible)}
    />
 }
/>


</KeyboardAwareScrollView>
<TextButton label="Create Account" contentContainerStyle={{height:55, marginTop:SIZES.radius, borderRadius:SIZES.radius, backgroundColor:COLORS.primary}} labelStyle={{
    
    ...FONTS.h3

}}
onPress={()=>console.log("Register In Success")}
/>
{/* Terms and condition  */}
<Checkbox conatinerStyle={{ marginTop:SIZES.radius,}} isSelected={checkbox} onPress={()=>setCheckbox(!checkbox)}/>
        </View>
    </MotiView>
         
        )

    }
    function renderAuthContainer() {
        if(mode=="signIn"){
            return renderSignIn()
        }else{
            return renderSignUp()
        }
    }

      
    // Render

    function renderCountryModal() {
       if(showCountryModal){
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showCountryModal}
            >
                <TouchableWithoutFeedback
                    onPress={() => setShowCountryModal(false)}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.dark80
                        }}
                    >
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.light,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <FlatList
                                data={countries}
                                keyExtractor={(item) => item.code}
                                contentContainerStyle={{
                                    paddingHorizontal: SIZES.padding,
                                    paddingBottom: SIZES.padding,
                                }}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginTop: SIZES.radius
                                            }}
                                            onPress={() => {
                                                console.log(item)
                                                setSelectedCountry(item)
                                                setShowCountryModal(false)
                                            }}
                                        >
                                            <Image
                                                source={{ uri: item.flag }}
                                                resizeMode="contain"
                                                style={{
                                                    width: 40,
                                                    height: 30
                                                }}
                                            />
                                            <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
       }
    }

    return (
       <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
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
{renderCountryModal()}
        </View>
       </ScrollView>
    )
}
const styles=StyleSheet.create({
    authConatiner:{
      flex:1,
      width:SIZES.width-(SIZES.padding * 2),
      paddingHorizontal:SIZES.padding,
      paddingVertical:10,
 
      borderRadius:SIZES.radius,
      backgroundColor:COLORS.light,
      
    }
})

export default AuthMain;