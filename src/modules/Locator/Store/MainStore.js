import React, { Component } from 'react'
import BranchPage from './BranchPage';

export default class ViewMainStore extends Component {

    state = {
        store: {
            branch: {
                imageUri: '',
                title: '',
                address: '',
                telNo: '',
                email: ''
            },
            hours: {
                days: "",
                morning: "",
                evening: ""
            }
        }
    }


    componentDidMount() {
        setTimeout( () => {
            
            const branch = {
                imageUri: "https://i2.wp.com/www.nabcofurniture.com/wp-content/uploads/2018/10/wakrah.jpg?w=640&ssl=1",
                title: 'Main Showroom',
                address: 'Airport Street, Al Wakrah Road Doha, Qatar',
                telNo: '+974 4466 6646',
                email: 'info@nabcogroup.co'
            };

            const hours = {
                days: "Sunday to Thursday",
                morning: "9:00 AM - 1:00 PM",
                evening: "4:00 PM - 10:00 PM",
                friday: "4:00 PM - 9:00 PM"
            };
            
            this.setState( { 
                store : {
                    branch: branch,
                    hours: hours
                } 
            });
        },1000)
    }

    render() {
        console.log(this.state.store);
        return (
            <BranchPage store={this.state.store}  />
        )
    }
}
