import React, {Component} from 'react';
import {TouchableOpacity, Image, TouchableHightlight, ImageBackground, ScrollView, View, Text, StyleSheet, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import back from '../resources/icons/back.png';
import share from '../resources/icons/share.png';

class FacilityDetailsContainer extends Component<Props> {
	constructor(props){
		super(props);
		this.state = {
    		backgroundColor: '#ff0033'
		}
	}

	render(){
		const name=this.props.navigation.getParam('name');
		const location = this.props.navigation.getParam('location');
		const image = this.props.navigation.getParam('image');
		const nav = this.props.navigation;
		console.log("The location is " + location);

		
		return(
			<View style={styles.container}>
				
				<View style={styles.facilityTopContainer}>
					<View style={styles.imageContainer}>
						<ImageBackground 
							source={image}
	  						style={{ width: '100%', height: '100%'}}
						>

						</ImageBackground>
					</View>
					

					<View style={styles.imageInfo}>
						<TouchableOpacity 
							onPress={()=> nav.goBack()} 
							style={styles.iconContainer}>	
							<Image style={[{tintColor: '#3a9918'}, styles.icon]} source={back} />
						</TouchableOpacity>
						
						<View style={styles.textInfo}>
							<Text>Charity name?</Text>
							<Text>{name}</Text>
							<Text>{location}</Text>
						</View>

						<TouchableOpacity 
							
							style={styles.iconContainer}>	
							<Image style={styles.icon} source={share} />
						</TouchableOpacity>


					</View>

				</View>
				
				<View style={styles.divider}>
				</View>

				<View style={styles.facilityBottomContainer}>
					<Text style={styles.title}>
						Introduction
					</Text>

					<Text style={styles.mainBody}>
						为使犬毛有光泽、漂亮，
						有的人用海藻或让犬喝少量的醋，
						有的人用蛋白涂抹犬毛等。这些方法都不好。
						如用蛋白来涂抹约克夏或马尔济斯犬的毛，
						一旦干燥后，毛就会分叉、断裂，反而要损伤毛质、
						损伤毛根，使毛色更加暗淡，有时还会引起皮炎或皮肤病。
						要使犬毛有光泽、美观，可每天给犬多喂富含蛋白质的饲料。含有维生素E、
						维生素D的添加剂和海藻类食物、蔬菜等，如瘦肉、煮熟的蛋黄、植物油等，
						少喂富含糖份、盐份、淀粉等食物。
					</Text>
				</View>
			</View>
		);
	}
}

export default FacilityDetailsContainer;


const styles = StyleSheet.create({
	container:{
		flex:1
	},

	facilityTopContainer: {
		flex:1.8,
		
		
	},
	divider:{
		flex:.06,
		backgroundColor: '#d8d8d8',
	},

	imageContainer: {
		flex:4,


	},
	imageInfo:{
		flex:1.5,
		flexDirection: 'row',

	
	},

	facilityBottomContainer:{

		flex:2,
		
		padding:8,
	},

	icon: {
		flex: 1,
	    width: 40,
	    
	  
	    resizeMode: 'contain',
	},
	iconContainer: {
		flex:1,
	
		height:'100%',
		justifyContent: 'center',
		alignItems:'center',

	},
	textInfo:{
		flex:4,
	
		justifyContent:'space-around',

		alignItems:'center',
	},
	mainBody:{
		marginTop:15,
		fontSize:18,

	},
	title:{
		fontSize:15,
		fontWeight: 'bold',
	},









});