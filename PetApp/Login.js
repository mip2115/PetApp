import React, {Component} from 'react';
import { Button, Platform, StyleSheet, Text, View} from 'react-native';

class Login extends Component<Props> {

	render(){
		return(
			<View>
				<Button title="Sign in" />
				<Button title="Sign up" />
			</View>
		);
	}
}

export default Login;
