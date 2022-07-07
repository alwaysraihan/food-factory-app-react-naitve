import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View ,Text} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SIZES, constants } from "../../constants";
const ITEM_WIDTH = 120;

const Walkthrough1 = () => {
    // Row1
    const [row1Images, setRow1Images] = React.useState([
        ...constants.walkthrough_01_01_images,
        ...constants.walkthrough_01_01_images
    ]);
    const [currentPosition, setCurrentPositon] = React.useState(0);
    // Row2
    const [row2Images, setRow2Images] = React.useState([
        ...constants.walkthrough_01_02_images,
        ...constants.walkthrough_01_02_images,
    ]);
    const [row2CurrentPosition, setRow2CurrentPositon] = useState(0);

    // Ref
    const row1FlatListRef = React.useRef();
    const row2FlatListRef = React.useRef();

    useEffect(()=>{
        let positionTimer
        const timer = ()=>{
            positionTimer(() => {
              // Inceremennt scroll postion with each new interval

            //   slider 1
            setCurrentPositon(prevPositon=>{
               const position= Number(prevPositon)+1 
               row1FlatListRef?.current.scrollToOffset({offset:position,animated:false})
               const maxOffset= constants.walkthrough_01_01_images.length * ITEM_WIDTH
               if(prevPositon>maxOffset){
                const offset= prevPositon-maxOffset
                row1FlatListRef?.current?.scrollToOffset({offset, 
                animated:false})
                return offset
               }else {
                return position
               }
            })
            // slider 2  

            timer()
            }, 32);

        }
        timer()
        return ()=>{
            clearTimeout(positionTimer)
        }
    },[])
    return (
        <View>
            {/* slider 1 */}
            <FlatList
                ref={row1FlatListRef}
                decelerationRate="fast"
                horizontal
                showsHorizontalScrollIndicator={false}
                listKey="Slider1"
                keyExtractor={(_, index) => `Slider1_${index}`}
                data={row1Images}
                scrollEnabled={false}
                renderItem={({ item, index }) => {
                    return  (<View
                    style={{
                            width:ITEM_WIDTH,
                            alignItems:"center",
                            justifyContent:'center'
                        }
                    }
                    >
<Image
source={item}
style={{width:110, height:110}}
/>
                    </View>)
                }}
            />
            {/* slider 2 */}

            <FlatList
                ref={row2FlatListRef}
                decelerationRate="fast"
                style={{ marginTop: SIZES.padding }}
                horizontal
                showsHorizontalScrollIndicator={false}
                listKey="Slider2"
                keyExtractor={(_, index) => `Slider2_${index}`}
                
                data={row2Images}
                scrollEnabled={false}
                renderItem={({ item, index }) => {
                    return  (<View
                        style={{
                                width:ITEM_WIDTH,
                                alignItems:"center",
                                justifyContent:'center'
                            }
                        }
                        >
    <Image
    source={item}
    style={{width:110, height:110}}
    />
                        </View>)
                }}
            />
        </View>
    );
};

export default Walkthrough1;

const styles = StyleSheet.create({});
