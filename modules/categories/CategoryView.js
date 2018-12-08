import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';

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

    render() {

        return (
            <View style={styles.container}>
                <CategoryList categories={this.state.categories}></CategoryList>
            </View>
        )
    }
}

export default CategoryView;