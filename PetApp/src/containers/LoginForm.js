import React, {Component} from 'react';
import { Button, Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import LoginSignUpForm from '../components/LoginSignUpForm';
import { StackNavigator } from 'react-navigation';

export default class LoginForm extends Component<Props> {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit() {
		this.props.navigation.goBack();
	}

	render() {

		return(
			<View>
				<LoginSignUpForm />
				<Button title="go back" onPress={() => this.props.navigation.goBack()}></Button>
				<Button title="Submit" onPress={this.handleSubmit} />

				

			</View>
		);
	}
}
