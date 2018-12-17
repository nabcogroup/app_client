import React, { Component } from 'react'
import BranchPage from './BranchPage';

export default class ViewGarafahStore extends Component {
    
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
                imageUri: "https://i0.wp.com/www.nabcofurniture.com/wp-content/uploads/2018/10/garafah.jpg?w=640&ssl=1",
                title: 'Al Garafah Showroom',
                address: 'Beside Immigration Office, Al Garaffah, Doha, Qatar',
                telNo: '+974 446 66636',
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
        return (
            <BranchPage store={this.state.store} />
        )
    }
}
