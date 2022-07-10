import { StyleSheet, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { SIZES,images } from '../../constants'
import {MotiImage, useDynamicAnimation} from 'moti'
const Walkthrough3 = ({animate}) => {
    // Moti initial position 
    const motiImage1= useDynamicAnimation(()=>({
        top:"25%",
        left:"25%"
    }))
    const motiImage2= useDynamicAnimation(()=>({
        top:"54%",
        left:"25%"
    }))
    const motiImage3= useDynamicAnimation(()=>({
        top:"54%",
        left:"55%"
    }))
    const motiImage4= useDynamicAnimation(()=>({
        top:"25%",
        left:"55%"
    }))

    useEffect(()=>{
if(animate){
    motiImage1.animateTo({
  
        top:"10%",
        left:"15%"
    })

    motiImage2.animateTo({
        top:"52%",
        left:"15%"
       
    })
    motiImage3.animateTo({
      
        top:"65%",
        left:"60%"
    })
    motiImage4.animateTo({
   
        top:"25%",
        left:"60%"
    })
}
    },[animate])
  return (
    <View style={
        {flex:1,
            overflow:'hidden',
            justifyContent:'center'
            ,alignItems:'center'
            
        
        }
    }>
     
     <MotiImage state={motiImage1} source={images.walkthrough_01_01}
      style={styles.image}
      />
    
      <MotiImage state={motiImage2} source={images.walkthrough_02_05}
      style={styles.image}
      />
      <MotiImage state={motiImage3} source={images.walkthrough_02_06}
      style={styles.image}
      />
      <MotiImage state={motiImage4} source={images.walkthrough_03_01}
      style={styles.image}
      />
      
    </View>
  )
}

export default Walkthrough3

const styles = StyleSheet.create({
    image:{
        position:'absolute',
        width:112,
        height:112,
        zIndex:0,
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
        borderRadius:SIZES.radius
    }
})