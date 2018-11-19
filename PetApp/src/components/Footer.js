import React, {Component} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button as NButton } from 'react-native-elements'
import Home from '../resources/icons/home.png';
import Bowl from '../resources/icons/bowl.png';
import Plus from '../resources/icons/plus.png';
import Message from '../resources/icons/mail.png';
import Account from '../resources/icons/account.png';

class Footer extends Component<Props> {
	constructor(props){
		super(props);
	}

	handleInput() {

	}

	render() {
		return (
			<View style={styles.footer}>
				
				<View style={styles.buttonContainer}>	
					<Image style={styles.image} source={Home} />
				</View>

				<View style={styles.buttonContainer}>	
					<Image style={styles.image} source={Bowl} />
				</View>

				<View style={styles.buttonContainer}>	
					<Image style={styles.image} source={Plus} />
				</View>

				<View style={styles.buttonContainer}>	
					<Image style={styles.image} source={Message} />
				</View>

				<View style={styles.buttonContainer}>	
					<Image style={styles.image} source={Account} />
				</View>


			</View>

		);
	}
}

export default Footer;

const styles = StyleSheet.create({

	footer:{
		flexDirection:'row',
		justifyContent: 'space-around',
		flex: 1,


	},

	image: {
		flex: 1,
	    width: 40,
	  
	    resizeMode: 'contain',
	},
	buttonContainer: {
	

	
		height:'100%',
	}

});

