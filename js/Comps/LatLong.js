import React, { Component } from 'react';
import { AppRegistry, TextInput, View } from 'react-native';

export default class Lat extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Lat' };
  }

  render() {
    return (
      <View>

      <TextInput
      placeholder = 'Lat'
      keyboardType = 'numeric'
      onChangeText = {(text)=> this.onChanged(text)}
      value = {this.state.myLat}
        
    style={{
      marginTop: -100,
      marginBottom: 10,
      height: 50,
      width:200, 
      borderColor: 'blue', 
      borderWidth: 1,
      borderRadius: 20,
      textAlign:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      fontSize: 20,
      }}
    onChangeText={(text) => this.setState({myLat: text})}
        
      />
      <TextInput
      placeholder = 'Long'
      keyboardType = 'numeric'
      value = {this.state.myLong}
      
    style={{
      height: 50,
      width:200, 
     borderColor: 'black', 
     borderWidth: 1,
     borderRadius: 20,
      textAlign:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      fontSize: 20,
      }}
    onChangeText={(text) => this.setState({myLong: text})}
   
      />
      </View>
    );
  }
}


      
