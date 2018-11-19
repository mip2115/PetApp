/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button, Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/components/Login';
import Home from './src/components/Home';
import TestComponent from './src/components/TestComponent';
import LoginForm from './src/containers/LoginForm';
import HomeContainer from './src/containers/HomeContainer';
import FacilityDetailsContainer from './src/containers/FacilityDetailsContainer';
import LowList from './src/components/LowList';
import LoginContainer from './src/containers/LoginContainer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


const Realm = require('realm');

const dogSchema= {
  name: 'Dog',
  properties: {
    name: 'string'
  }
};

class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {realm: null};
    this.addDog = this.addDog.bind(this);
    this.deleteDB = this.deleteDB.bind(this);




  }

   componentDidMount() {
       StatusBar.setHidden(true);
    }


  componentWillMount() {


    /*Realm.open({
      schema: [dogSchema]
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'});
      });


      this.setState({ realm });
    });



   
    /*
    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}]
        }).then(realm => {
          realm.write( () => {
          realm.create('Dog', {name: 'Rex'});
        });
    this.setState({realm});
  });
  */

  }



  render() {
    

    const PersonSchema = {
      name: 'Person',
      properties: {
        name: 'string'
      }
    };

    
    
    const info = this.state.realm
      ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
      : 'Loading...';
/*
    Realm.open
    ({schema: [{name: 'Person', properties: {name: 'string'}}] }).then(realm=> {
      realm.write( () => {
        realm.create('Person', {name: 'Matt'});
      });
      this.setState({realm});
    });
    */

    //const DB = this.state.realm ? this.state.realm.objects('Person') : "Nothing to display";
    // {info}
    /*
         <Button onPress={this.deleteDB} title="Delete all DB" />
       <Button onPress={this.addDog} title="Add a dog" />
    */
    return (

      
        <AppNavigator />
    
   
    );
  }

  addDog() {
     Realm.open({
      schema: [dogSchema]
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'});
      });


      this.setState({ realm });
    });

  }

  deleteDB(){
    console.log("Button pressed");
    Realm.open({
      schema: [dogSchema]
    }).then(realm => {
      realm.write(() => {
        let allDogs = realm.objects('Dog');
        realm.delete(allDogs);
      });


      this.setState({ realm: realm });
    });

    
  }
}

//This creates the stack, you don't need to do this in other places
const AppNavigator = StackNavigator({
  LoginContainer: {
    screen:LoginContainer,
    navigationOptions: {
      header:null,
    }
  },
  Login: {
    screen: Login,
     navigationOptions: {
        header: null,
      }
   },
   LoginForm: {
    screen: LoginForm,
     navigationOptions: {
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
  HomeContainer: {
    screen: HomeContainer,
    navigationOptions: {
      header: null,
    }
  },
  FacilityDetailsContainer: {
    screen: FacilityDetailsContainer,
    navigationOptions: {
      header: null,
    }
  },

  LowList: {
    screen: LowList,
    navigationOptions: {
      header: null,
    }
  },


  
});


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
   // borderWidth:4,
   // borderColor:'red',
  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
