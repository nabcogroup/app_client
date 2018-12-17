import React, { Component } from 'react'
import {View,Text,ScrollView,SafeAreaView, StyleSheet, Image,TouchableHighlight } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'



const ContactInfo = ({ info }) => {

    return (
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
            <View style={{ flex: 2, alignItems: "stretch" }}>
                <Text style={{ marginTop: 5, marginBottom: 5, fontSize: 12, fontWeight: '700' }}>{info.label}</Text>
                <Text style={{marginTop: 5, marginBottom: 5}}>{info.value}</Text>
            </View>

            <View style={{
                flex: 1, 
                borderLeftWidth: 1, 
                borderLeftColor: "#ddd", 
                textAlign: "center",
                paddingVertical: 10 }}>
                
                <TouchableHighlight>
                    <Icon name={info.icon} style={{ fontSize: 30, alignSelf: "center", color: "#9370db" }} />
                </TouchableHighlight>
            </View>
        </View>
    );
}

const OfficeHourInfo = ( { info }) => {

    _showFriday = ( data ) => {
        if(data.friday) {
            return (
                <View style={styles.officeHourGroupLabel}>
                    <Text>Friday</Text>
                    <Text>{data.friday}</Text>
                </View>
            )
        }
        else {
            return <View></View>
        }
    }

    return (
        <View>
            <View style={styles.officeHourGroupLabel}>
                <Text style={{ marginRight: 20 }}>Days</Text>
                <Text style={{ alignSelf: "flex-end" }}>{info.days}</Text>
            </View>
            <View style={styles.officeHourGroupLabel}>
                <Text style={{ marginRight: 20 }}>Morning</Text>
                <Text style={{ alignSelf: "flex-end" }}>{info.morning}</Text>
            </View>
            <View style={styles.officeHourGroupLabel}>
                <Text style={{ marginRight: 20 }}>Evening</Text>
                <Text style={{ alignSelf: "flex-end" }}>{info.evening}</Text>
            </View>
            {this._showFriday(info)}
        </View>
    )
}

const BranchImage = ({imageUri}) => {

    if(imageUri && imageUri.length > 0)  {
        return (
            <View style={{ flex: 1 }}>
                <Image source={{uri: imageUri }} style={{ width: "100%", height: 150}} />
            </View>
        )
    }
    else {
        return (<View style={{ flex: 1 }}></View>)
    }
}


export default class BranchPage extends Component {

    constructor(props) {

        super(props);
    }

    componentDidMount() {
        
       

    }

    

    render() {

        const { branch, hours } = this.props.store;
        
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1}}>
                    <BranchImage imageUri={branch.imageUri} />
                    <View style={{ 
                        flex: 2, 
                        backgroundColor: "#fff"
                        }}>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{ paddingLeft: 10, paddingRight: 10 }}>

                                <View style={styles.topHeader}>
                                    <Text style={styles.branchTitle}>{branch.title}</Text>
                                    <Text>{branch.address}</Text>
                                </View>

                                <View style={styles.branchCard}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Icon name="map-marker"  style={{color: "#9370db", marginRight: 15, paddingTop: 5}} />
                                        <Text style={styles.subHeader}>Contact Number</Text>
                                    </View>
                                    
                                    <ContactInfo info={{ label: "Phone Number", value: branch.telNo, icon: 'phone' }} />
                                    <ContactInfo info={{ label: "Email Address", value: branch.email, icon: "envelope" }} />
                                </View>

                                <View style={styles.branchCard}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Icon name="clock-o"  style={{color: "#9370db", marginRight: 15, paddingTop: 5}} />
                                        <Text style={styles.subHeader}>Business Hours</Text>
                                    </View>
                                    <OfficeHourInfo  info={hours}/>
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        )
  }
}


const styles = StyleSheet.create({
    topHeader: { 
        paddingVertical: 15, 
        elevation: 1, 
        shadowOffset: {width: 0, height: 0}, 
        shadowColor: '#ddd' 
    },
    branchCard: {
        marginVertical: 25
    },
    branchTitle: { 
        fontSize: 20, 
        fontWeight: '700', 
        color: '#3e1b72',
        paddingVertical: 10 
    },
    subHeader: {
        color: "#1b2372",
        fontWeight: "700",
        fontSize: 15
    },
    officeHourGroupLabel: {
        paddingVertical: 10, 
        borderBottomColor: "#ddd", 
        borderBottomWidth: 1,
        flexDirection: "row", 
        justifyContent: "space-between",
    }
});