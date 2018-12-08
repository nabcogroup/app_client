import React,{Component} from 'react';
import { FlatList,View,StyleSheet } from 'react-native';
import ProductCard from "./ProductCard";



class ProductList extends Component {
   
    constructor(props) {
        super(props);
    }

    renderItemView= (item) => {
        
        return (<ProductCard product={item} />)

    }

    render() {

        return(
            <View style={styles.container}>
            <FlatList  
                data={this.props.products}
                renderItem={({item}) => this.renderItemView(item)}
                keyExtractor={item => item.id}
            />
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: 10, 
        paddingBottom: 10
    }
})



export default ProductList;
