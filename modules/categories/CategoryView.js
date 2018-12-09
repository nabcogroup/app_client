import React,{Component} from 'react';
import {StyleSheet,View, Alert, Button} from 'react-native';

import CategoryList from './CategoryList';
import { CategoryDS } from '../../models/category-model';


const styles = StyleSheet.create({

});

class CategoryView extends Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title','Category'),
        }
    }

    state = {
        categories: [],
        isBackButtonShow: false,
        onBackButtonClicked: this._onBackButtonClicked
    }
    
    categoryService = new CategoryDS();


    constructor(props) {
        super(props);
    }


    componentDidMount() {
        
        let that = this;
        this.props.navigation.addListener("didFocus", this._reload);
    }

    _reload = (payload) => {
        this.categoryService.getParentCategories((categories) => {
            this.setState( { categories });
            this.props.navigation.setParams({title: `Category` });
        });
    }

    _onBackButtonClicked = () => {

        //make it back to categories
        Alert.alert('I was clicked');
    }

    _onItemSelected = (item) => {

        if(item.count > 0) {
            this.categoryService.getCategoryByParentId(item.id, (categories) => {
                this.setState( { categories });
                this.props.navigation.setParams({title: `Category - ${item.title} ` });
            });
        }
        else {
            this.props.navigation.navigate("Products")
        }
    }


    render() {

        return (
            <View style={styles.container}>
                <CategoryList 
                    categories={this.state.categories} 
                    onItemSelected={this._onItemSelected} />
            </View>
        )
    }
}

export default CategoryView;