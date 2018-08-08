import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import getTemp from './api/getTemp';
import { connect } from 'react-redux';
import { fetchStart, fetchSuccess, fetchError } from './redux/actionCreators';


class Main1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
        };
    }

    getMessageTemp() {
        const { cityName, temp, isLoading, error } = this.props;
        if (isLoading) return '...Loading';
        if (error) return 'Please, Enter again!';
        if (!cityName) return 'Enter City Name : ';
        
        return `The Temperature in ${cityName} 
                    is ${this.state.temp}oC`;
    }

    getTempplate() {
        const { cityName } = this.state;
        this.props.fetchStart();
        getTemp(cityName)
            .then(temp => {
                this.props.fetchSuccess(cityName, temp);
                this.setState({ temp: (temp - 273).toFixed(2) });

            })
            .catch(() => this.props.fetchError());
    }

    render() {
        const { container, IPbtn, btnGet, textinfo } = styles;
        return (
            <View style={container}>
                <View style = {{ justifyContent: 'center' ,alignItems: 'stretch'}}>
                <Text style={textinfo}> {this.getMessageTemp()}</Text>
                </View>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={IPbtn}
                    value={this.state.en}
                    onChangeText={text => this.setState({ cityName: text })}
                    placeholder='Enter the City Name'
                />
                <TouchableOpacity
                    onPress={this.getTempplate.bind(this)}
                    style={btnGet}
                >
                    <Text> Get The Template </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapPropsToState(state) {
    return {
        temp: state.temp,
        cityName: state.cityName,
        isLoading: state.isLoading,
        error: state.error
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textinfo: {
        color: 'black',
        fontSize: 20,
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
export default connect(mapPropsToState, { fetchStart, fetchSuccess, fetchError })(Main1);
