import React, {Component} from 'react';
import {TouchableOpacity, TextInput, Image, StyleSheet, View, Text} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import LoginIcon from '../resources/icons/Login.png';
import WeChat from '../resources/icons/wechat.png';

class SignInForm extends Component<Props> {
	constructor(props){
		super(props);
		this.state={
			number: 'Enter Number',
			verify: 'Enter Verification'
		};
		this.handleNumber = this.handleNumber.bind(this);
		this.handleVerify = this.handleVerify.bind(this);
	}

	handleNumber(number) {
		this.setState({
			number: 'number',
		});
	}

	handleVerify(number) {
		this.setState({
			verify: 'number',
		});
	}

	handleVerification() {

	}

	render() {
		return (
			<View style={styles.container}>
				
				<View style={styles.signUp}>
					<TouchableOpacity><Text style={{fontSize:20}}>
						Sign Up
					</Text></TouchableOpacity>
				</View>

				<View style={styles.logoContainer}>
					<Image source={LoginIcon} style={styles.logo} />
				</View>

				<View style={styles.mainContainer}>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							
							onChangeText={(number) => this.handleNumber(number)}>
						</TextInput>

						<View style={styles.SecondInputContainer}> 
							<TextInput
								style={styles.SecondInput}
								
								onChangeText={(number) => this.handleNumber(number)}>
							</TextInput>
							
							<TouchableOpacity style={styles.verifyCode}>
								<Text style={{color:'rgb(29,196,77)'}}>Resend Code</Text>
							</TouchableOpacity>
						</View>
				



						
					</View>
					<View style={styles.signinContainer}>
						<TouchableOpacity 
							onPress={()=>this.props.navigation.navigate('HomeContainer')}
							style={[styles.signin, {opacity:.5,}]}>
							<Text style={{color: 'white', fontSize: 20}}>
								Sign in
							</Text>
						</TouchableOpacity>
						<View style={styles.or}>
							<Text style={{color:'rgb(201, 201, 206)'}}> Or </Text>
						</View>
						<TouchableOpacity 
							style={[styles.signin, {backgroundColor: 'white', borderWidth:1,}]}>
							<Text style={{color: 'green', fontSize: 20,}}>
								Sign in With Account
							</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.rest}>
						<View style={styles.or}>
							<Text 
								style={{color:'rgb(201, 201, 206)'}}> 
								Choose another method 
							</Text>
						</View>

						<View style={styles.OtherMethods}>
							
							<View style={styles.OtherMethodsIconContainer}>
								<Image source={WeChat} style={styles.OtherMethodsIcons} />
							</View>

							<View style={styles.OtherMethodsIconContainer}>
								<Image source={WeChat} style={styles.OtherMethodsIcons} />
							</View>

							<View style={styles.OtherMethodsIconContainer}>
								<Image source={WeChat} style={styles.OtherMethodsIcons} />
							</View>
						
						</View>

						<View style={styles.terms}>
							<Text style={{color:'#1dc44d',}}>I agree to the terms and agreements</Text>
						</View>
					</View>
				</View>

			</View>

		);
	}
}

export default SignInForm;

const styles = StyleSheet.create({
	container:{
		height:'100%',
		backgroundColor: 'white',
	},
	signUp:{
		
		flexDirection:'row',
		justifyContent: 'flex-end',
		fontSize:30,
		flex:.2,
		alignItems:'center',
		paddingRight:10,
	},

	logo: {
      flex: 1,
      width: 80,
    
      resizeMode: 'contain',
      tintColor:'#1dc44d',
  	},
  	logoContainer: {
  		flex:.5,
  		//borderWidth:1,
  		//borderColor:'red',

  
  	
    //borderWidth: 4,
    justifyContent: 'center',
    alignItems:'center',

  },

  mainContainer:{
  	flex:2.3,
  	//borderWidth: 1,
  	//borderColor:'blue',
  },

  input: {
  	height: 40, 
  	borderColor: 'rgb(201, 201, 206)', 
  	borderWidth: 1,
  	borderRadius: 30,
  	fontSize:20,
  	height:50,
  	padding:15,
  	width:'83%',
  	alignSelf:'center',



  },
  SecondInput:{
  
  	borderColor: 'rgb(201, 201, 206)', 
  	borderWidth: 1,
  	borderRadius: 30,
  	fontSize:20,
  	paddingLeft:15,
  	fontSize:20,
 
  	
  	flex:1,
  	
 

  },

  SecondInputContainer:{
  	height: 40, 
  	borderColor: 'rgb(201, 201, 206)', 
  
  	borderRadius: 30,
  	fontSize:20,
  	height:50,


  	width:'83%',
  	alignSelf:'center',
   
  	flexDirection:'row',
  	justifyContent:'space-between',
  },

 

  inputContainer:{
  	//borderWidth:.5,
  	height:120,
  	justifyContent: 'space-around',


  	//borderColor:'orange',
  },
  verifyCode:{
  	flex:.5,

  
  	textAlign:'center',
  	paddingTop:15,
  	marginLeft:10,
  },

  rest:{

  	flex:1


  },
  signin:{
  	//borderWidth:1,
  	//borderColor:'green',
  	height:50,
  	borderRadius:30,
  	justifyContent: 'center',
  	alignItems: 'center',
  	backgroundColor: 'rgb(29,196,77)',
  	borderColor:'rgb(29,196,77)',


  },

  signinContainer:{
  	flexDirection: 'column',
  	justifyContent: 'space-around',
  	//borderWidth:1,
  	//borderColor:'red',
  	padding:30,


  },
  or:{
  	justifyContent: 'center',
  	alignItems: 'center',
  	height:40,


  },
  OtherMethods:{
  	flexDirection:'row',
  	justifyContent: 'space-around',
    alignItems:'center',
 
    flex:1,
  },
  OtherMethodsIcons:{
  	flex: 1,
    width: 80,
    resizeMode: 'contain',
    tintColor:'#1dc44d',    
  },

  OtherMethodsIconContainer:{
 
  	height:'55%',
  },
  terms:{
  	flex:.5,
  	justifyContent:'center',
  	alignItems:'center',

  },
  



})