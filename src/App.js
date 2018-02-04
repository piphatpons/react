
console.log('App component is working');
import React, {Component} from 'react';
import {Text,Image,View} from 'react-native';
import Navbar from './component/Navbar';

export default class App extends Component {
    componentDidMount(){
        console.log('componentDidMount()');
    }
    componentWillMount(){
        console.log('componentWillMount()');
    }
    render(){
        console.log('Render');
        return (
        <Text> 
        Navbar
        </Text>
        );
    }

}
