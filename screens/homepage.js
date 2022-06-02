import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert, Text, View, StyleSheet, TextInput, Dimensions, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../const/colors';
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';
import comps from '../const/comps';


const width = Dimensions.get("screen").width/ 2-30;


export default function Homepage({navigation}){
    const [categoryIndex, setCategoryIndex] = React.useState(0);

    const categories = ['PRODUCTS', 'ABOUT', 'CONTACTS'];

    const CategoryList = () => {
        return (
            <View style={style.category_style}>
            {categories.map((item, index)=>(
                <TouchableOpacity 
                    key={index} 
                    activeOpacity={0.8}
                    onPress={()=> setCategoryIndex(index)}>
                    <Text 
                        style={
                            [style.categorytext_style, 
                            categoryIndex == index && style.categorySelectedtext_style
                            ]}>
                            {item}
                    </Text>
                </TouchableOpacity>     
            ))}
        </View>
        );
    };
    
    const Card = ({comp}) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('productDetails', comp)}>
                <View style={style.card}>
                    <View style={{alignItems: "flex-end"}}>
                        <View 
                            style={{
                                borderRadius: 15, 
                                width: 30, 
                                height: 30,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: comp.like ? 'rgba(245, 42, 42,0.2)' : 'rgba(0,0,0,0.2) ',
                                }}>
                            <MaterialIcons 
                                name="favorite" 
                                size={20} 
                                color={comp.like ?  COLORS.red : COLORS.dark} />
                        </View>
                    </View>
                    <View style={{height: 160, width: "120%", position: "relative", alighItems: "center", justifyContent: "center" }}>
                        <Image source={comp.img} style={{width: "80%", height: "80%", resizeMode: "contain"}} />
                    </View>
                    <View style={{alignItems: "center",}}>
                        <Text style={{fontWeight: "bold", fontSize: 12,}}>
                            {comp.name}
                        </Text>
                    </View>
                    
                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 15, }}>
                        <Text style={{fontWeight: "bold", textAlign: "center" }}>Price: GHS {parseFloat(comp.price).toFixed(2)}</Text>
                        <View style={{backgroundColor: COLORS.blue, width: 25, height: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                            <AntDesign name="plus" size={24} color="white" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/api/product/', {
    //         method:"POST"
    //     })
    //     .then(response => response.json())
    //     .then(products => {
    //         setProducts(products);
    //     })
    //     .catch(error => console.error(error));
    // },[])

    // function getProductList(){
    //     return fetch('http://192.168.78.183:19000/api/product/', {
    //         method:"GET"
    //     })
    //     .then((response) => response.json())
    //     .then(products => {
    //         setProducts(products);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // }

    // const renderItem= (item) => {
    //     return (<Card comp={item}/>);
    // }
    
    return(
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: "white"
            }}>
            <View style={style.header}> 
                <View>
                <TouchableOpacity
                onPress={()=>{
                   Alert.alert("Successfully logged out")
                    navigation.navigate('Login')
                    return;
                }}
                >
                  <FontAwesome name="sign-out" size={24} color="black" />
                  <Text>Sign Out</Text>
                </TouchableOpacity>
                    
                    <Text 
                        style={{
                            fontSize: 25, 
                            fontWeight: "bold", 
                            color: COLORS.blue,
                            textShadowOffset: {width: 3, height: 3},
                            textShadowRadius: 5,
                            textShadowColor: 'black',
                            }}>WELLNESS PHARMA</Text>
                </View>
                <View>
                    <View 
                        style={{
                            position: 'absolute', 
                            height: 20, 
                            width: 20, 
                            borderRadius: 10, 
                            backgroundColor: COLORS.blue,
                            top: -15, 
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2000
                        }}>
                        <Text>0</Text>
                    </View>
                    <TouchableOpacity onPress={() =>navigation.navigate('carts')} >
                        <View>
                            <FontAwesome name="shopping-cart" size={30} color="black" />  
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={{marginTop: 30, flexDirection: "row"}}>
                <View style={style.search_container}>
                    <FontAwesome name="search" size={24} color="black" style={{marginLeft: 20, marginRight: 5}} />
                    <TextInput placeholder="Search Here" style={style.input}/>
                </View>
                <View style={style.sort_button}>
                    <MaterialIcons name="sort" size={30} color="white" />
                </View>
            </View>
            <CategoryList/>
            <FlatList 
                columnWrapperStyle={{justifyContent: "space-between"}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    margintBottom: 50
                }}
                numColumns={2}
                data={comps}

                return
                renderItem={({item}) => {
                    return <Card comp={item}/>;
                }}
                />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    search_container: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 15,
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.dark,
        flex: 1,
    },
    sort_button: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:  COLORS.blue,
        marginLeft: 5,
        padding: 7,
        borderRadius: 10,
        borderBottomWidth: 1
    },
    category_style: {
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 30,
        justifyContent: "space-evenly"

    },
    categorytext_style: {
        color: "black", 
        fontWeight: "bold"
    },
    categorySelectedtext_style: {
        color:  COLORS.blue,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: "black"
    }, 
    card: {
        flexDirection: "column",
        height: 280,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 0.5,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    }


});