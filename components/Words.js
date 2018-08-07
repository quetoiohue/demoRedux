import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleMemorized, toggleIsShow } from '../redux/actionCreators';

class Words extends Component {
    
    render() {
        const { en, vn, memorized, isShow, id } = this.props.myword;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const btnMemorizedText = memorized ? 'forget' : 'memorized';
        const TextIsShow = isShow ? vn : '-------';
        const { container, supposeStyle, btn } = styles;
        return (
            <View style={container}>
                <Text style={{ textDecorationLine }}> {en} </Text>
                <Text> {TextIsShow} </Text>
                <View style={supposeStyle}>
                    <TouchableOpacity
                        onPress={() => this.props.toggleMemorized(id)}
                        style={btn}
                    >
                        <Text> {btnMemorizedText} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => this.props.toggleIsShow(id)}
                    style={btn}
                    >
                        <Text> show </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        margin: 10,
        padding: 10
    },
    Menubar: {
        backgroundColor: 'aqua',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    Textbar: {
        color: '#0000',
        fontSize: 16,
        fontFamily: 'Avenir',
    },
    supposeStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn: {
        backgroundColor: 'chartreuse',
        padding: 10
    }
});
export default connect(null , { toggleIsShow , toggleMemorized })(Words);
