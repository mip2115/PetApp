import React, {Component} from 'react';
import {Image, Button, View, Text, StyleSheet, FlatList} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import EducationData from '../resources/Lists/EducationData';


class EducationList extends Component<Props> {
	constructor(props){
		super(props);
		this.data=EducationData;
      
	}

	handleInput() {

	}

	render() {
		return (
			<View style={styles.education}>
				{/*<Text style={styles.educationTitle}>Education</Text>*/}


						<FlatList 
							horizontal={true}
							
						

							data={this.data}
							renderItem={({item}) => (
							<View style={styles.educationItem} >
								<View style={styles.buttonItem}>
									<Image style={styles.image}  source={item.icon}/>
								</View>


								<Text style={styles.textItem}>{item.key}</Text>
							</View>)}
				/>
				
				

			</View>

		);
	}
}

export default EducationList;


const styles = StyleSheet.create({
	education :{
		flexDirection: 'column',
		
		flex:1,

		
	},

	educationItem:{	
		flexDirection: 'column',
		justifyContent:'center',
	    alignItems: 'center',
	    width:145,
	   

	    



	  	
	  
	    
	   


	},
	buttonItem: {
		height: 40,
	    width: 40,
	
	    flex:1,
	   	
	    
	

	},
	textItem: {
	
		width:'100%',
		textAlign: 'center',
	},
	image: {
		flex: 1,
	    width: null,
	    height: null,
	    resizeMode: 'contain'
	},
	educationTitle:{
		textAlign:'center',
		marginBottom:10
	},
	education: {
	
		height:'100%',
		flexDirection: 'column',
		justifyContent: 'space-around',
	}
});
