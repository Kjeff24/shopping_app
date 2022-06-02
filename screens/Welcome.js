import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import Indicators from './indicator';

export default function Welcome({navigation}) {
    
    const slides = [
        {
            key: 1,
            title: "Wellness Pharma",
            desc: "Get your medicine here",
            backgroundColor: "#6E939B",
            color: "white"
        },
        {
            key: 2,
            title: "Affordable",
            desc: "Get a price that fits your need",
            backgroundColor: "#6A878E",
            color: "white"
        },
        {
            key: 3,
            title: "Register Now!",
            desc: "free Delivery in Ghana",
            backgroundColor: "#64777C",
            color: "white"
        },
    
    ]
    if(!slides || !slides.length) return null;  

    const[currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const flatListRef = useRef();
    
    const onViewableItemsChanged = useRef((item) => {
        const index = item.viewableItems[0].index;
        setCurrentSlideIndex(index);
    }); 

    const handleSkip = () => {
        flatListRef.current.scrollToEnd({animated: true});
    };

    const handleNext = () => {
        if (currentSlideIndex >= slides.length -1) return;
        flatListRef.current.scrollToIndex({index: currentSlideIndex + 1});
    }

    return (
        <View>
            <FlatList 
            ref = {flatListRef}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            pagingEnabled
            data={slides} 
            keyExtractor={(item) => item.key.toString()}
            renderItem={({item}) => (
                <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
                    <Text style={[styles.text, {color: item.color}]}>{item.title}</Text>
                    <Text style={[styles.desc_style, {color: item.color}]}>{item.desc}</Text>  
                </View>
                )}
            onViewableItemsChanged={onViewableItemsChanged.current}
            />
            <View style={styles.indicatorContainer}>
                <Indicators currentSlideIndex={currentSlideIndex} indicatorCount={slides.length}/>
            </View>
            {currentSlideIndex < slides.length - 1 && (<Text 
                onPress={handleSkip}
                style={[styles.button, styles.leftButton]}>Skip
            </Text>)}
            {currentSlideIndex < slides.length - 1 ? 
                <Text 
                    onPress={handleNext}
                    style={[styles.button, styles.rightButton]}>Next
                </Text> :
                <Text onPress={() =>navigation.navigate('Login')}
                style={[styles.button, styles.rightButton]}>Done</Text> 
                    
            }
            
            
            
        </View>
 
    )
};

const {width, height} = Dimensions.get("screen")

const styles= StyleSheet.create({
    slide:{
        width,
        height,
        justifyContent: "center",
        alignItems: 'center',
    },
    desc_style: {
        fontSize:20
    },
    text: {
        fontSize: 50,
        fontWeight: "bold"
    },
    indicatorContainer: {
        position: 'absolute',
        width,
        bottom: 20,
        flexDirection: "row",   
        justifyContent: "center",
        borderColor: "brown"
    },
    button: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        letterSpacing: 2
    },
    leftButton: {
        position: "absolute",
        left: 10,
        bottom: 20

    },
    rightButton: {
        position: "absolute",
        right: 10,
        bottom: 20
    }
    
})