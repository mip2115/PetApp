import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Button, Platform, Text, View, StatusBar} from 'react-native';
import Login from '../components/Login';
import SignInForm from '../components/SignInForm';




class LoginContainer extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			clickedLogin: false,
			clickedSignup: false,
			number: 4,

		}
		this.handleClickLogin=this.handleClickLogin.bind(this);
		this.add = this.add.bind(this);

		
	}

	handleClickLogin() {
		this.setState({
			clickedLogin:true,
		})


	}

	add(){
		this.setState({
			number:5,
		});
	}

	handleSubmit(event) {
		

		//this.props.navigation.goBack();
	}

	render() {


		console.log("current state is " + this.state.clickedLogin);
		if (!this.state.clickedSignup && !this.state.clickedLogin) {
			return(

				
				<View>	
				
					<Login handleClickLogin={this.handleClickLogin}/>
				</View>

			);
		}

		else if (!this.state.clickedSignup && this.state.clickedLogin) {
			return(

				
				<View >	
				
					<SignInForm navigation={this.props.navigation}/>
				</View>

			);
		}
		
	}
}

export default LoginContainer;

const styles = StyleSheet.create({

	container: {
		height:'100%',
		width: '100%',
	}
});