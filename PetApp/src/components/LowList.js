import React, {Component} from 'react';
import {TouchableOpacity, TouchableHighlight, Alert, Picker, Image, View, Text, StyleSheet, FlatList} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import ModalDropdown from 'react-native-modal-dropdown';
import LowListData from '../resources/Lists/LowListData';
import TestComponent from './TestComponent';


class LowList extends Component<Props> {
	constructor(props){
		super(props);
		this.data=LowListData;

	}

	componentDidMount(){
    	console.log("Stack is from LowList " +  this.props.navigation);
  	}

	handleInput() {

	}

	handleFilterClick(){
		console.log("Getting clicked");
		return(
			Alert.alert(
				'Alert Title',
				  'My Alert Msg',
				  [
				    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
				    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				    {text: 'OK', onPress: () => console.log('OK Pressed')},
				  ],
				  { cancelable: false }
			)
		);
	}

	render() {
		return (
			<View onPress={ ()=>console.log("Pressed") }
				style={styles.lowList}>
				<View style={styles.lowListHeader}>
					<TouchableHighlight style={styles.border} underlayColor={"#f2f2f2"} onPress={this.handleFilterClick}>
					   <Text>Sort</Text>
					</TouchableHighlight>

					<TouchableHighlight style={styles.border} underlayColor={"#f2f2f2"} onPress={this.handleFilterClick}>
					   <Text>Service</Text>
					</TouchableHighlight>

				

					<TouchableHighlight style={styles.border} underlayColor={"#f2f2f2"} onPress={this.handleFilterClick}>
					   <Text>Sort</Text>
					</TouchableHighlight>
										
					
					
				</View>

			


						
						<FlatList
							horizontal={false}
							data={this.data}
							renderItem={({item}) => (
								<TouchableOpacity
									style={styles.LowListItem}
									onPress = {() => 
										this.props.navigation.push('FacilityDetailsContainer', {
											name: item.name,
											location: item.location,
											image: item.image,
									})}
									>

									<View 
										style={styles.imageContainer}>
										<Image style={styles.image} source={item.image} />
									</View>

									<View 
										style={styles.infoContainer}>
											<View style={styles.Row}>
												<Text>{item.name} {' '}</Text>
												<Text>Pet type</Text>
											</View>

											<View 
												style={styles.Row}>
												<StarRating
													fullStarColor={'green'}
													halfStarColor={'green'}
											        disabled={false}
											        maxStars={5}
											        rating={item.rating}
											        starSize={15}
											        selectedStar={(rating) => this.onStarRatingPress(rating)}
									      		/>
									      		<Text>{' '}{item.location}</Text>
											</View>


											<View style={styles.Row}>{item.services.map( (element)=> (<Text>{element + ' '} </Text>   ) )}</View>
									</View>

									
									
								</TouchableOpacity>
							)}
							/>
								{/*}

								<View 
									style={styles.LowListItem}
									onPress = {() => 
										this.props.navigation.push('FacilityDetailsContainer', {
											name: item.name,
											location: item.location,
											image: item.image,
									})}>
										
									<View 
										style={styles.imageContainer}>
										<Image style={styles.image} source={item.image} />
									</View>
									
									<View 
										style={styles.infoContainer}>
											<View style={styles.Row}>
												<Text>{item.name} {' '}</Text>
												<Text>Pet type</Text>
											</View>

											<View 
												style={styles.Row}>
												<StarRating
													fullStarColor={'green'}
													halfStarColor={'green'}
											        disabled={false}
											        maxStars={5}
											        rating={item.rating}
											        starSize={15}
											        selectedStar={(rating) => this.onStarRatingPress(rating)}
									      		/>
									      		<Text>{' '}{item.location}</Text>
											</View>


											<View style={styles.Row}>{item.services.map( (element)=> (<Text>{element + ' '} </Text>   ) )}</View>
									</View>
							
							</View>)}
						
						/>
						*/}
				

			</View>

		);
	}
}

export default LowList;


const styles = StyleSheet.create({
	
	LowListItem:{	
		flexDirection: 'row',
		margin: 2,
	    fontSize: 13,

	    //alignSelf:'stretch',
	    height: 100,
	    borderBottomWidth:1,
	  

	 
	},

	dropdown_4: {
	    margin: 8,
	    borderColor: 'lightgray',
	
	 },
  	dropdown_4_dropdown: {
    	width: 100,
  	},
	image: {
		flex: 1,
	    width: null,
	    height: null,
	    resizeMode: 'contain'

	},
	PetType: {

		height:10,
		width:10,
	},
	border: {
		borderWidth:.3,
		flex:3,
		padding:10,
		borderColor: 'grey',
		alignItems: 'center',


	},

	Row: {
		

		flexDirection: 'row',

		alignItems: 'center',
		justifyContent: 'flex-start',

		flex: 3,
	},


	imageContainer: {
		

	
		flex:2,
	},

	infoContainer: {
		
	

		padding:10,
		flex:5,
		flexDirection: 'column',
		paddingLeft: 10,
	},
	lowListHeader:{
		marginBottom:10,
		margin:3,
		flexDirection:"row",
		justifyContent:'space-around',
		padding: 3,
		//borderBottomWidth: .3,
		

	},

	


	
	lowList: {
    	alignItems: 'stretch',
    	
	},
	description :{
		flexDirection: 'column',
		marginLeft:5,

	}
});
