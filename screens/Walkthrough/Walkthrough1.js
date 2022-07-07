import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SIZES, constants } from "../../constants";
const ITEM_WIDTH = 120;

const Walkthrough1 = () => {
    // Row1
    const [row1Images, setRow1Images] = React.useState([
        ...constants.walkthrough_01_01_images,
        ...constants.walkthrough_01_01_images,
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
                renderItem={({ item, index }) => {
                    return <View></View>;
                }}
            />
            {/* slider 2 */}
            <Text>Walkthrough1</Text>
        </View>
    );
};

export default Walkthrough1;

const styles = StyleSheet.create({});
