import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class TestComponent extends Component<Props> {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View>
				<Text>
					HiTest
				</Text>
			</View>

		);
	}
}

