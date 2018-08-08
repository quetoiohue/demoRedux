import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default class Main1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
        };
    }
  render() {
    const { container, IPbtn, btnGet, textinfo } = styles;
    return (
        <View style={container}>
            <Text style={textinfo}> The Template in HaNoi is 30'C</Text>
            <TextInput 
            underlineColorAndroid='transparent'
            style={IPbtn}
            value={this.state.en}
            onChangeText={text => this.setState({ en: text })}
            placeholder='Enter the City Name'
            />
            <TouchableOpacity
             style ={btnGet}
            >
            <Text> Get The Template </Text>
            </TouchableOpacity>
            </View>
    );
}
}

const styles = StyleSheet.create({
container: {
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
},
textinfo:{
    color: 'black',
    fontSize: 25
},
IPbtn: {
    height: 40,
    width: 200,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
    color: 'gray'
},
btnGet: {
    backgroundColor: 'chartreuse',
    padding: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
}
});
//defaultState
