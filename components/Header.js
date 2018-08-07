import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding } from '../redux/actionCreators';

class Header extends Component {
    
    render() {
        const { AddStyle } = styles;
        return (
            <View style= {AddStyle}>
                <Text/>
                <Text> ADD </Text>
                <TouchableOpacity
                onPress={() => this.props.toggleIsAdding()}
                >
                <Text> + </Text>
                </TouchableOpacity>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    AddStyle: {
        backgroundColor: 'cyan',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    }
});
export default connect(null , { toggleIsAdding })(Header);