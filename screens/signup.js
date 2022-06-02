
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Alert, ImageBackground, View, SafeAreaView, Dimensions } from 'react-native';
import { auth } from '../firebase';
import * as Animatable from 'react-native-animatable';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, Ionicons, AntDesign } from '@expo/vector-icons';;
const {width, height} = Dimensions.get("screen");

export default function Signup ({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style={{ marginTop: 25, width, height, backgroundColor: "white", paddingHorizontal: 20}}>
      <View style={styles.headerView}> 
				<Animatable.Text 
					animation="fadeInDown"duration={2000} 
					style={styles.header_text}>WELLNESS
				</Animatable.Text>
				<Animatable.Text 
					animation="fadeInDown"duration={2000} 
					style={[styles.header_text, {color: "#50e6e3"}]}>PHARMA
				</Animatable.Text>
			</View>
      <View style={{marginTop: 50, alignItems: "center"}}>
				<Text style={{fontSize: 20, fontWeight: "bold", color: "black", textDecorationLine: 'underline'}}>REGISTRATION</Text>
			</View>
      <Text style={{fontStyle: "italic", color: "black", marginTop: 20}}>Create an account with us and enjoy the best services</Text>
      <View style={{flexDirection: "row", marginTop: 20}}>
        <Entypo 
						name="mail" 
						size={20} 
						color="black" 
						style={{position: "absolute"}} />
        <TextInput
          style={{paddingLeft: 30, borderBottomWidth: 0.5, flex: 1, fontSize: 18,}}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={{flexDirection: "row", marginTop: 20}}>
				<FontAwesome 
					name="lock" 
					color="black" 
					size={20} 
					style={{position: "absolute"}}/>
        <TextInput
          style={{paddingLeft: 30, borderBottomWidth: 0.5, flex: 1, fontSize: 18,}}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      
      <View>
        <TouchableOpacity
          onPress={() => {
            handleSignUp
            Alert.alert("Successfully Registered")
            navigation.navigate('Welcome')
          }}
          style={styles.signup_style}
        >
          <Text style={{color: "#FFFFFF", fontWeight: "bold", marginLeft: 5}}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical: 20, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
				<View style={styles.line}></View>
					<Text style={{fontWeight: "bold", marginHorizontal: 5}}>OR</Text>
				<View style={styles.line}></View>
			</View>
      <View style={styles.optionStyle}> 
				<View style={styles.primary}>
					<Text style={{fontWeight: "bold"}}>SINGUP WITH</Text>
					<Ionicons name="logo-facebook" size={24} color="#005BD8" />
				</View>
				<View style={{width: 10}}/>
				<View style={styles.primary}>
					<MaterialCommunityIcons name="apple" size={20} color="black" />
					<Text style={{fontWeight: "bold"}}>SIGNUP WITH APPLE</Text>
				</View>
			</View>
      <View style={styles.secondary}>
				<Text style={{color: "#C4C5C6", marginTop: 10,}}>Already have an account?</Text>
				<TouchableOpacity onPress={() =>navigation.navigate('Signup')}>
					<Text style={{color: "#FFA500", fontWeight: "bold"}} onPress={() =>navigation.navigate('Login')}>Click here to Login</Text>
				</TouchableOpacity>
			</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerView: {
					
		alignItems: "center",
		borderRadius: 10, 
		borderBottomWidth: 2, 
		borderTopWidth: 2, 
		borderBottomColor: 'grey', 
		borderTopColor: "grey", 
		paddingHorizontal: 20,  
		marginTop: 40, 
		flexDirection: 'row',
	},

	header_text: {
		fontSize: 30, 
		fontWeight: "bold",
	},
	signup_style: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center", 
		padding: 10, 
		marginTop: 30,
		borderRadius: 5,
		paddingHorizontal: 20, 
		backgroundColor: "#50e6e3", 
	},
	line: {
		height: 1,
		width: 30,
		backgroundColor: "grey"
	},
	optionStyle: {
		flexDirection: "row",
		justifyContent: "space-between",

	},
	primary: {
		height: 50,
		borderWidth: 1,
		borderColor: "grey",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		flexDirection: "row",


	},
	secondary: {
		flexDirection: "row", 
		alignItems: 'flex-end', 
		justifyContent: "center", 
		marginTop: 20, 
		marginBottom: 20}
})
