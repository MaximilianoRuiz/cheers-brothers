import React, { Component } from 'react';
import * as firebase from 'firebase';

// Assets

class Stock extends Component {

    constructor(){
        super();
        this.state = {
            listOfStock: []
        };
    }

    componentDidMount(){
        const rootRef = firebase.database().ref().child('stock');
        rootRef.on('child_added', snap => {
            console.log(snap.key);
            console.log(snap.val().name);
            console.log(snap.val().price);

        });
    }


    render() {
        const listOfStock = this.state.listOfStock.map(stock =>
                <div>
                    <h1>{stock.id}</h1>
                    <h1>{stock.name}</h1>
                    <h1>{stock.price}</h1>
                </div>
        );
        return (
            <div>{listOfStock}</div>
        );

    }
}

export default Stock;