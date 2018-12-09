import React from 'react'
import {Button, StyleSheet,View} from 'react-native'
import CategoryList from './CategoryList'
import { CategoryDS } from '../../models/category-model';

export default class ViewPanelCategories extends React.Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title', '')
        }
    }

    state = {
        categories: []
    }

    categoryService = new CategoryDS()

    componentDidMount() {

        const { navigation } = this.props;
        const parentId = navigation.getParam('parentId',0);
        const title = navigation.getParam('title','');

        console.log(parentId);
        this.categoryService.getCategoryByParentId(parentId, (categories) => {
            this.setState( { categories });
            this.props.navigation.setParams({title: `${title} ` });
        });
    }


    _onItemSelected = (item) => {
        const { navigation } = this.props;
        if(item.count > 0) {
            navigation.navigate('SectionCategories', { parentId: item.id, title: item.title})
        }
        else {
            navigation.navigate('ViewProducts')
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


const styles = StyleSheet.create({
    
});
