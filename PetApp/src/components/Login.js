import React, {Component} from 'react';
import {  TouchableOpacity, Image, ImageBackground, FlatList, Button, Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { Form, Button as NButton } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import PopupDialog, {DialogTitle} from 'react-native-popup-dialog';
//https://github.com/jacklam718/react-native-popup-dialog
//import dropdown from 'react-native-dropdown';
import { Dropdown } from 'react-native-material-dropdown';
import { StackNavigator } from 'react-navigation';

import LoginForm from '../containers/LoginForm';
import Home from './Home';
import TestComponent from './TestComponent';
import LoginIcon from '../resources/icons/Login.png';


class Login extends Component {
  constructor(props) {
    super(props);
    this.data1 = [{value: 1}, {value: '2'}];
    this.state = {
      pressedSignUp: false,
    }
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.displayOptions = this.displayOptions.bind(this);
  }

  componentDidMount(){
    console.log("Stack is " +  this.props.navigation);
  }


  handleSignUp() {
    this.setState( { 
      pressedSignUp: true,
    });

    console.log("PressedSignUp is now " + this.state.pressedSignUp);
  }

  handleSignIn() {
    
    this.props.navigation.navigate('HomeContainer');
    
  }

  goToFormScreen() {
    //this.props.navigation.goBack();
    console.log('Pressed');
    this.props.navigation.navigate('LoginForm');


  }


  displayOptions() {

    const list = [ {value: 'Email'}, {value: 'Social media'}, {value: 'SMS Text'} ];

    if (this.state.pressedSignUp) {
    return(


      <View>
       
         <FlatList
         
          data={[
            {key: 'Email'},
            {key: 'Social media'},
            {key: 'SMS Text'},
          ]}
          renderItem={({item}) => {
            
            return(
              <View >
               <TouchableHighlight 
                  underlayColor="#f2f2f2"
                  style={styles.newView} onPress={ () => this.goToFormScreen()}>
                     <Text style={styles.item}>{item.key}</Text>
                </TouchableHighlight>
              </View>

            )
        
          }

        }
        />

      </View>
    );
    }

  }


	render(){
 

		return(
      
			<ImageBackground
        source={require('../resources/imgs/background.png')}
        style={styles.container}>
      {/*<Button 
        onPress={() => this.props.navigation.navigate('LoginForm')} title='LoginForm'/>*/}
        
         <View style={[styles.buffer, {flex: .3}]} />

        <View style={styles.imageContainer} >
          <Image source={LoginIcon} style={styles.image} />
        </View>
        
      
        <TouchableOpacity 
          onPress={this.props.handleClickLogin}
          style={styles.PageTitle}><Text style={styles.title}>Get Started</Text></TouchableOpacity> 
     

     
         
   

      <View style={[styles.buffer, {flex: 3.5}]} />
      
      
      {/*<Dropdown
        label='Favorite Fruit'
        data={this.data1}
      />
   
      
      <NButton  
        onPress={this.handleSignIn}
        fontSize={30} style={[styles.button, styles.button1]} 
        title="Sign in" 
      />

       <NButton  
        onPress={this.handleSignUp}
        fontSize={30} style={[styles.button]} 
        title="Sign up" 
      />

       


      {this.displayOptions()}




		


   */}
					
				</ImageBackground>
			);
		}
}

/*
export default createStackNavigator({
  Login: {
    screen: Login,
  },

});
*/

/*
const AppNavigator = StackNavigator({
  LoginForm: {
    screen: LoginForm,
    navigationOptions: { //this is what removes the arrow
        header: null,
      }
  },
  Home: {
    screen: Home,
    navigationOptions: { //this is what removes the arrow
        header: null,
      }
  },
   TestComponent: {
    screen: TestComponent,
    navigationOptions: { //this is what removes the arrow
        header: null,
      }
  },

});
*/




export default Login;

const styles = StyleSheet.create({
  container: {
 
 	  alignSelf: 'stretch',
    //borderWidth: 0.8,
    //borderColor: 'blue',
  
    justifyContent: 'flex-start',
  	
  	  	
  	height:'100%',
   
  },
  dropdown: {


   

    justifyContent:'center',
    textAlignVertical: 'center',

  },
  dropdown1: {


  
  },
  dropdowntext: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },

  button: {
  	marginBottom: 15,


  },
  pop: {
  	marginTop:1,
  

  },
  button1:{
  	marginTop: 70,
  },
  item: {
     fontSize: 25,
  
  },
  newView: {
     alignItems: 'center',
      justifyContent: 'center',
      padding: 25,
     borderRadius: 2,
    //borderWidth: 0.8,
   // borderColor: '#8c8c8c',
    margin: 5,
  
  },
  title: {
    
    fontSize: 40,
    color:'white',
    
    width: '100%',
    textAlign: 'center',

    

    

  },

  PageTitle: {
   
    justifyContent: 'center',
    alignItems: 'center',
    
 
    
  },
  image: {
    flex: 1,
      width: 80,
    
      resizeMode: 'contain',
      tintColor:'white',
  },
  imageContainer: {
  

  
    flex:1,
    //borderWidth: 4,
    justifyContent: 'center',
    alignItems:'center',

  },
  titleContainer: {
    //borderWidth: 6,
    justifyContent: 'space-around',
    alignItems:'center',
    flex:1,

  },
  buffer:{
    //borderWidth: 4,
    //borderColor:'red',
    
  }
});

/*
  <NButton  
        onPress={ () => {this.popupDialog.show(); }}
        fontSize={30} style={[styles.button, styles.button1]} 
        title="Sign in" 
      />

        <PopupDialog />


    

      <Button title="hello">

      </Button>
    

     
      <ModalDropdown style={styles.dropdown} options={['Email', 'Social Media', 'Phone Verify']}
      onSelect={this.helper}
      dropdownStyle={styles.dropdown1}
      defaultValue="Sign Up"
      dropdownTextStyle={styles.dropdowntext}
      >
       
      </ModalDropdown>


      <PopupDialog style={styles.pop} dismissOnTouchOutside={true}
      dialogTitle={<DialogTitle title="Dialog Title" />}
      height={0.5} width={0.8}
        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          >
        
      </PopupDialog>

*/