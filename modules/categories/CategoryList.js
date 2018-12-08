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
        borderBottomWidth: 2,
        borderBottomColor: "#d4d4d4"
    },
    cardContent: {
        
        fontSize: 20
    }

});

const CategoryCard = ({item, onPressItem }) => {

    _onPressItem = () => {
        onPressItem(item.id)
    }

    return (
        <TouchableHighlight onPress={this._onPressItem}>
            <View style={styles.card}>
                <Text style={styles.cardContent}>{item.title}</Text>
                <Text>press</Text>
            </View>
        </TouchableHighlight>
        
    )
}

class CategoryList extends Component {

    constructor(props) {
        super(props);
    }

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id) => {
        this.props.onItemSelected(id);
    }

    _renderItem = ({item}) => (
        <CategoryCard 
            onPressItem={this._onPressItem}
            item={item}
        ></CategoryCard>
    )

    render() {
        return(
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