import React, { Component } from 'react';
import * as firebase from 'firebase';

// Assets

class Stock extends Component {

    constructor(){
        console.log('constructor');
        super();
        this.state = {
            listOfStock: [],
            list: [],
            rootRef : firebase.database().ref().child('stock')
        };

        this.setList = this.setList.bind(this);
        this.clearList = this.clearList.bind(this);
    }

    componentWillMount(){
        console.log('will mount');
        //this.clearList();
        //let rootRef = firebase.database().ref().child('stock');
        this.state.rootRef.on('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                const stock = {
                    id: childSnapshot.key,
                    name: childSnapshot.val().name,
                    price: childSnapshot.val().price
                };
                this.setList(stock);
            });
        });
    }

    setList(stock){
        if(this.state.listOfStock.length === 0) {
            this.setState({
                listOfStock:[]
            });
        }
        console.log(stock);
        this.setState({
            listOfStock: this.state.listOfStock.concat([stock])
        });
    }

    clearList(){
        console.log('clear');
        this.setState({
            listOfStock: [],
            rootRef : firebase.database().ref().child('stock')
        });
    }


    render() {
        console.log(this.state.listOfStock);
        const listOfStock = this.state.listOfStock.map(stock =>
                <div>
                    <h5>{stock.name} ----> {stock.price}</h5>
                </div>
        );
        return (
            <div>{listOfStock}</div>
        );
    }
}

export default Stock;