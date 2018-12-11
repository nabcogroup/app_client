import React,{Component} from 'react';
import { FlatList,View,StyleSheet, Image, Touchable,Text } from 'react-native';


const ProductCard = ({ product }) => {
    
    
    return (
        <View style={styles.card}>
            <View style={styles.imgContainer}>
                <Image style={ {width: '100%', height: 200} } source={ {uri: (product.image ? product.image.src : "")}} />
            </View>
            <View style={styles.cardBody} >
                <Text style={styles.title}>{product.name}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.badge}>SKU {product.sku}</Text>
                </View>
            </View>
        </View>
    )
}



class ProductList extends Component {

    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    _keyExtractor = (item,index) => item.id.toString();
    _renderItem = ({item}) => (
        <ProductCard product={item} ></ProductCard>
    )
    
    render() {
        
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.products}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor} />
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: "#f5f5f5",
        paddingTop: 10, 
        paddingBottom: 10
    },
    card: {
        flex: 1,
        borderColor: "#d4d4d4",
        backgroundColor: "#fff",
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'center',
        padding: 5
    },
    imgContainer: {
        flex: 2,
        flexDirection: 'column',
    },  
    cardBody: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15
    },
    textContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'row'

    },
    title: {
        fontSize: 12,
        textAlign: 'center',
        padding: 5,
        paddingBottom: 5
    },
    badge: {
        backgroundColor: "#ec7063",
        fontSize: 10,
        padding: 10,
        borderRadius: 3,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    }

})



export default ProductList;
