import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { showAll, showMemorized, showNeedPractice } from '../redux/actionCreators';

class Filter extends Component {
    getTextStyle(statusName) {
        const { myFilterStatus } = this.props;
        if (statusName === myFilterStatus) { return { color: 'yellow', fontWeight: 'bold', fontFamily: 'Avenir' }; }
        return styles.btnText;
    }
    render() {
        const { Menubar } = styles;
        return (
            <View style={Menubar}>
                <TouchableOpacity onPress={() => this.props.showAll()}>
                    <Text style={this.getTextStyle('SHOW_ALL')}>  SHOW ALL </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.showMemorized()}>
                    <Text style={this.getTextStyle('MEMORIZED')}>    MEMORIZED </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.showNeedPractice()}>
                    <Text style={this.getTextStyle('NEED_PRACTICE')}>    NEED PRACTICE </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { myFilterStatus: state.filterStatus };
}

export default connect(mapStateToProps, { showAll, showMemorized, showNeedPractice })(Filter);

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        margin: 10,
        padding: 10
    },
    Menubar: {
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: height / 11,
    },
    btnText: {
        color: 'black',
        fontFamily: 'Avenir'
    }
});
