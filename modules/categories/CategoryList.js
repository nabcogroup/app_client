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

const CategoryCard = ({item}) => {

    onPressButton = () => {
        Alert.alert('This was press')
    }


    return (
        <TouchableHighlight onPress={this.onPressButton}>
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

    onPressButton() {
        Alert.alert('This was press')
    }

    render() {
        return(
            <View>
                <TouchableHighlight onPress={this.onPressButton}>
                    <Text>Add</Text>
                </TouchableHighlight>
                <FlatList
                    data={this.props.categories}
                    renderItem={({item}) => (
                        <CategoryCard item={item}></CategoryCard>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            
        )
    }
}

export default CategoryList;