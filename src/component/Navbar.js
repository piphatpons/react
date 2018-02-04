console.log('Navbar component is working');
import React , {Component} from 'react';
import {Text} from 'react-native';

class Navbar extends Component {

    render(){
        return(
        <Text style={{maginTop:20}}> 
            Navbar 
        </Text>
        );
    }
}
export default Navbar;