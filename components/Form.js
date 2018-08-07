import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding, addWord } from '../redux/actionCreators';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: '',
        };
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        const { en, vn } = this.state;
        this.props.addWord(en, vn);
        this.props.toggleIsAdding();
    }
    render() {
        const { AddStyle, IPbtn, btnAdd } = styles;
        return (
            <View style={AddStyle}>
                <TextInput 
                style={IPbtn}
                value={this.state.en}
                onChangeText={text => this.setState({ en: text })}
                placeholder='English Word'
                />
                <TextInput
                style={IPbtn}
                value={this.state.vn}
                onChangeText={text => this.setState({ vn: text })}
                placeholder='VietNamese Word'
                />
                <TouchableOpacity
                onPress={this.onAdd.bind(this)}
                 style ={btnAdd}
                >
                <Text> ADD </Text>
                </TouchableOpacity>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    AddStyle: {
        backgroundColor: 'gainsboro',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    IPbtn: {
        height: 40,
        width: 200,
        padding: 10,
        marginVertical: 10
    },
    btnAdd: {
        backgroundColor: 'chartreuse',
        height: 40,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default connect(null, { toggleIsAdding, addWord })(Form);
