import React,{Component} from 'react';
import {StyleSheet,View, Alert} from 'react-native';

import CategoryList from './CategoryList';
import { getCategories } from '../../models/category-model';


const styles = StyleSheet.create({

});

class CategoryView extends Component {
    
    static navigationOptions = {
        title: 'Categories'
    }

    state = {
        categories: []
    }

    

    componentDidMount() {
        let categories = getCategories();
        this.setState( { categories });
    }

    _onItemSelected = (id) => {
        Alert.alert(id);
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