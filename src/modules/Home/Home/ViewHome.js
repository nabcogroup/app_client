import React, { Component } from 'react'
import {
	Text,
	View, 
	SafeAreaView, 
	TextInput,
	StyleSheet,
	Platform,
	StatusBar,
	ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import PromotionWidget from './PromotionWidget';
import FeaturedCardWidget from './FeaturedCardWidget';


export default class ViewHome extends Component {

	state = {
		promotions: []
	}
	
	componentWillMount() {
		this.headerHeight = 50;
		this.state.promotions = [
			{ name: "Bedroom Set", imageUri: "https://i1.wp.com/www.nabcofurniture.com/wp-content/uploads/2018/11/10037213.jpg?resize=300%2C300&ssl=1"},
			{ name: "Bedroom Set", imageUri: "https://i0.wp.com/www.nabcofurniture.com/wp-content/uploads/2018/11/10038833.jpg?resize=300%2C300&ssl=1"},
			{ name: "Bedroom Set", imageUri: "https://i1.wp.com/www.nabcofurniture.com/wp-content/uploads/2018/11/10038367.jpg?resize=300%2C300&ssl=1"}	
		]
	}

	componentDidMount() {
		
	}



	render() {

		return (
			<SafeAreaView style={{flex: 1}}>
				<View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
					<View style={[styles.header, { marginTop: Platform.OS === 'android' ? 20 : null }]}>
						<View style={{
							flexDirection: "row"}}>
							<Icon name="search" size={20}  style={{ marginRight: 10, marginTop: 5}}/>
							<TextInput 
								underlineColorAndroid="transparent"
								placeholder="Enter Products"
								placeholderTextColor="gray"
								style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
							/>
						</View>
					</View>
					
					<ScrollView scrollEventThrottle={16}>
						<View style={{ flex: 1 }}>
							<View style={{ height: 220,backgroundColor: 'white', elevation: 1, shadowColor: "#ddd", shadowOffset: {width: 0, height: 0} }}>
								<Text style={{ fontSize: 20, fontWeight: '700', paddingVertical: 10 }}>Our Promotions</Text>
								<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
									{this.state.promotions.map((pro,index) => <PromotionWidget item={pro} key={index.toString()} /> )}
								</ScrollView>
							</View>
							<View style={{ }}>
								<FeaturedCardWidget></FeaturedCardWidget>
								<FeaturedCardWidget></FeaturedCardWidget>
								<FeaturedCardWidget></FeaturedCardWidget>

							</View>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		)
  	}
}


const styles = StyleSheet.create({
	header: {
		paddingVertical: 10,
		paddingHorizontal: 5,
		height: 50,
		borderBottomWidth: 0.5,
		borderBottomColor: "#ddd",
		backgroundColor: "#fff"
	}
});