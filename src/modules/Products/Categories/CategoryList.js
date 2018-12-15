import React,{Component} from 'react';
import { 
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableHighlight,
    Alert } from 'react-native';


const styles = StyleSheet.create({
    card: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 5,
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#f5f5f5"
    },
    cardContent: {
        color: "#000",
        fontSize: 18
    }
});

const CategoryCard = ({item, onPressItem }) => {

    _onPressItem = () => {
        onPressItem({id: item.id, name: item.name, count: item.count,parent: item.parent, isProductDisplay: item.isProductDisplay})
    }

    return (
        <TouchableHighlight onPress={this._onPressItem}>
            <View style={styles.card}>
                <Text style={styles.cardContent}>{item.name}</Text>
            </View>
        </TouchableHighlight>)
}

class CategoryList extends Component {

    constructor(props) {
        super(props);
    }

    _keyExtractor = (item, index) => item.id.toString();
    
    _onPressItem = (item) => {
        this.props.onItemSelected(item) 
    }

    _renderItem = ({item}) => (
        <CategoryCard 
            onPressItem={this._onPressItem}
            item={item}></CategoryCard>)

    render() {
        
        return (
            <View>
                <FlatList
                    data={this.props.categories}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }
}

export default CategoryList;