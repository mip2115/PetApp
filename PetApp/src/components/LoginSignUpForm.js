import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';

class LoginSignUpForm extends Component<Props> {
	constructor(props){
		super(props);
	}

	handleInput() {

	}



	render() {
		
		return (
			<View>
				<FormLabel>Name</FormLabel>
				<FormInput onChangeText={this.handleInput}> </FormInput>
				<FormLabel>Name</FormLabel>
				<FormInput onChangeText={this.handleInput}> </FormInput>
				<FormLabel>Name</FormLabel>
				<FormInput onChangeText={this.handleInput}> </FormInput>
				<FormLabel>Name</FormLabel>
				<FormInput onChangeText={this.handleInput}> </FormInput>
				
				
				
			</View>

		);
	}
}


export default LoginSignUpForm;