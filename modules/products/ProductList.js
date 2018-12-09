import React,{Component} from 'react';
import { FlatList,View,StyleSheet } from 'react-native';


const ProductCard = () =>{

    return (
        <View style={styles.card}>
            <View style={styles.cardBody} >
                <Text style={styles.title}>{this.props.product.name}</Text>
                <Text style={styles.sku}>{this.props.product.sku}</Text>
            </View>
        </View>
    )
}


class ProductList extends Component {

   
    
    
    
    constructor(props) {
        super(props);
    }


    render() {

        return(
            <View style={styles.container}>
                <FlatList  
                    data={this.props.products}
                    renderItem={({item}) => <ProductCard product={item} />}
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
    },
    card: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#d4d4d4",
        backgroundColor: "#fff"
    },
    cardBody: {
        paddingTop: 15,
        paddingBottom: 15
    },
    title: {
        height: 40,
        fontSize: 20
    }

})



export default ProductList;
