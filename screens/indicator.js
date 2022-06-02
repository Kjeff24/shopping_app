import React from 'react';
import {View, StyleSheet,} from 'react-native';

const Indicators = ({indicatorCount, currentSlideIndex}) => {
    if(!indicatorCount || typeof indicatorCount !== "number") return null
    let indicator = [];
    for(let i = 0; i < indicatorCount; i++){
        indicator.push(i)
    }
    return indicator.map((indicator, index) => (
        <View 
        key={indicator.toString()} 
        style={[styles.indicator, index === currentSlideIndex ? styles.seleted
        : styles.unseleted
    ]}/>
    ))

}; 

const styles = StyleSheet.create({
    indicator: {
        width: 10,
        height: 10,
        backgroundColor: "brown",
        borderRadius: 5,
        marginHorizontal: 5
    },
    seleted: {
        backgroundColor: "white"
    },
    unseleted: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "white"
    }
})

export default Indicators;