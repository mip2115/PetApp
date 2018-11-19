import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet, FlatList} from 'react-native';
import { Divider, Button, FormLabel, FormInput, FormValidationMessage, SearchBar } from 'react-native-elements'
import EducationList from '../components/EducationList';
import PopularFacilities from '../components/PopularFacilities';
import PersonalRec from '../components/PersonalRec';
import LowList from '../components/LowList';
import Footer from '../components/Footer';

class HomeContainer extends Component<Props> {
	constructor(props){
		super(props);
	

       
         this.lowList=[
            {key: 'Facility One'},
            {key: 'Facility Two'},
            {key: 'Facility Three'},
            {key: 'Facility Four'},
            {key: 'Facility Five'},
          ];



	}

	handleSearchInput() {

	}

	handleClearInput() {

	}

	handleInput() {

	}

	render() {

  
		return (
			<View style={styles.container}>
				
				{/*Options should be here too*/}
				<View style={styles.searchBarContainer}>
					<View style={styles.searchBar} >
					<SearchBar
					  
					  lightTheme
					  clearIcon={{ color: 'white' }}
					  searchIcon={{size: 24}} // You could have passed `null` too
					  onChangeText={this.handleSearchInput}
					  onClear={this.handleClearInput}
					  placeholder='Search...' />
					  </View>

					
				</View>
				
				<View style={styles.mainBody}>
					<ScrollView>


						<View style={styles.educationContainer}>
							<EducationList />
						</View>
						
				
						<View style={styles.ListsContainer}>
						
							<PopularFacilities style={styles.popularFacilities}/>
							<PersonalRec style={styles.personalRecs} />
							
							
						</View>


						<View style={styles.divider}>
						</View>


						<View style={styles.educationContainer}>
							<View style={styles.lowListContainer}>
								<LowList navigation={this.props.navigation}/>
							</View>
							{/*<LowList style={styles.lowList}>*/}

							{/*<PopularFacilities style={styles.popularFacilities}/>
							<PersonalRec style={styles.personalRecs} />
							<LowList style={styles.lowList} />*/}
						
						</View>
					</ScrollView>
				</View>
				
				<View style={styles.FooterContainer}>
					<Footer />
				</View>
				




			</View>

		);
	}
}

export default  HomeContainer;



const styles = StyleSheet.create({

	container: {
		
    	
    	height:'100%',
    	
	},

	searchBar:{
		flex: 5,
		
    	
	},
	options:{
		flex:1,
		
	},
	



	lowListContainer :{
		height:300,

	},	
	divider:{
		height:'3%',
		width:'100%',
		backgroundColor: '#b7b7b7',
	},





	/*I would maybe list out the recs and sort by personal recs, distance, recs, etc*/
	ListsContainer: {
		
 
    	
    	padding:20,


	},
	FooterContainer: {
	
    	flex:2,
    
	},

	mainBody: {

		flex:20,
	},
	searchBarContainer: {
		flexDirection: 'row',
		
    	
    	flex:2,

	},
	educationContainer:{
		flexDirection: 'column',

		
		height:'10%',
		paddingBottom:10,

  
	},

	
 
 	/*alignSelf: 'stretch',
    borderWidth: 0.8,
    borderColor: 'blue',
  
    justifyContent: 'flex-start',
  	
  	  	
  	height:'100%'*/


  
});

