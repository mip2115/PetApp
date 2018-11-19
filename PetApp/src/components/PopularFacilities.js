import React, {Component} from 'react';
import {Image, View, Text, StyleSheet, FlatList} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import PopularData from '../resources/Lists/PopularData';


class PopularFacilities extends Component<Props> {
	constructor(props){
		super(props);
		this.data=PopularData;
	}

	handleInput() {

	}

	render() {

		return (
			<View style={styles.popularFacilities}>
						

						<View style={styles.popularFacilityHeader}>
							<Text>Popular Facilities </Text>
							<Text style={{color:'blue'}}>See All</Text>
						</View>
							

						<FlatList
							horizontal={true}
							data={this.data}
							renderItem={({item}) => (
								<View style={styles.popularFacilityItem}>

									<View style={styles.imageContainer}>
										<Image style={styles.image} source={item.image} />

									</View>

									<View style={styles.infoContainer}>
										<View style={styles.info}>
											<Text>{item.name}</Text>
											<Text>{item.location}</Text>

										</View>

										<View style={styles.ratingsContainer}>
											
											<View style={styles.ratings}>
												<StarRating
													fullStarColor={'green'}
													halfStarColor={'green'}
											        disabled={false}
											        maxStars={1}
											        rating={1}
											        starSize={15}
											        selectedStar={(rating) => this.onStarRatingPress(rating)}
									      		/>
									      		<Text style={{color: 'green'}}>{item.rating}</Text>
									      	</View>
										</View>

									</View>
									
									{/* 
									<View style={styles.btnFacilityItem}></View>
									<Text >{item.name}</Text>

						
									<StarRating
								        disabled={false}
								        maxStars={1}
								        rating={1}
								        starSize={15}
								        selectedStar={(rating) => this.onStarRatingPress(rating)}
								      />
								     */}
						   

							 

							</View>)}
				/>
			
				

			</View>

		);
	}
}

export default PopularFacilities;


const styles = StyleSheet.create({
	
	popularFacilityItem:{	

		
		margin: 2,
	    fontSize: 13,
	 
	    width: 125,
	    height: 160,
	  
	    


	},
	image: {
		flex: 1,
	    width: null,
	    height: '100%',
	    //resizeMode: 'cover'
	},

	infoContainer: {

		flex:2,
		padding:2,
		flexDirection: 'row',
	},
	info: {
		flexDirection: 'column',

		flex:10,
		justifyContent: 'space-around',
		
	},
	ratingsContainer: {
		flexDirection: 'column',
	
		flex:4,
		justifyContent:'flex-end',
		padding: 5,
		alignItems:'center',

	},
	imageContainer: {
		
		flex:4,

	},
	ratings: {
		flexDirection:'row',
		color:'green',
		justifyContent: 'space-between',


	},
	popularFacilityHeader:{

		marginBottom:10,
		margin:3,
		flexDirection:"row",
		justifyContent:'space-between',
		padding: 3,
	},
});
