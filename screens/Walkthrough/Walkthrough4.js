import { StyleSheet, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { SIZES,images } from '../../constants'
import {MotiImage, useDynamicAnimation} from 'moti'
const Walkthrough4 = ({animate}) => {
    // Moti initial position 
    const motiImage1= useDynamicAnimation(()=>({
        top:"20%",
        right:"52%"
        
    }))
    const motiImage2= useDynamicAnimation(()=>({
        top:"45%",
        left:"44%"
    }))
    const motiImage3= useDynamicAnimation(()=>({
        top:"20%",
        left:"52%"
    }))

  
    useEffect(()=>{
if(animate){
    motiImage1.animateTo({
        top:"10%",
        right:"90%"
       
    })

    motiImage2.animateTo({
        top:"75%",
        left:"85%"
   
    })
    motiImage3.animateTo({
        top:"15%",
        left:"90%"
        
    })
    
}
    },[animate])
  return (
    <View style={
        {flex:1,
            overflow:'hidden'
        
        }
    }>
      <Image source={images.walkthrough_04_01}
      style={
        {
            ...styles.image,
            top:'15%',
            left:'35%',
            height:210,
            width:150,
            zIndex:0

        }
      }
      />
      

      <MotiImage state={motiImage1} source={images.walkthrough_02_03}
      style={styles.image}
      />
      <MotiImage state={motiImage2} source={images.walkthrough_02_04}
    style={styles.image}/>
      <MotiImage state={motiImage3} source={images.walkthrough_02_05}
      style={styles.image}/>

     
    </View>
  )
}

export default Walkthrough4

const styles = StyleSheet.create({
    image:{
        position:'absolute',
        width:100,
        height:90,
        zIndex:1,
        borderRadius:SIZES.radius
    }
})