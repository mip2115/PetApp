import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class Home extends Component<Props> {
	constructor(props){
		super(props);
	}

	handleInput() {

	}

	render() {
		return (
			<View>
				<FormLabel>Name</FormLabel>
				<FormInput> onChangeText={this.handleInput} </FormInput>

			</View>

		);
	}
}

