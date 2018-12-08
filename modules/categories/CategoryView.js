import React,{Component} from 'react';
import {StyleSheet,View, Alert} from 'react-native';

import CategoryList from './CategoryList';
import { getCategories, getCategoryById } from '../../models/category-model';


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
        let categories = getCategoryById(id);
        this.setState( { categories });
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