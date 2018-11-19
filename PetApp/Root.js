import React, {Component} from 'react';
import { Button, Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import App from './App';

class Root extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<View style={styles.container}>
				<App />
			</View>

		);
	}
}

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

 
  },
});