import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Words from './Words';
import Filter from './Filter';
import Header from './Header';
import Form from './Form'; 

class Main extends Component {
    getWordList(){
        const { myfilter , myWords } = this.props;
        if (myfilter === 'MEMORIZED') return myWords.filter(e => e.memorized);
        if (myfilter === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized);
        return myWords;
    }
    render() {
        const { myIsAdding } = this.props;

       return (
        
       <View style={{ flex: 1, backgroundColor: 'skyblue', alignSelf: 'stretch' }}>
        <Header />
        {myIsAdding ? <Form /> : null}
       <View style = {{ flex: 10}}>
        <FlatList 
        data={this.getWordList()}
        renderItem={({ item }) => 
            <Words myword = {item}/> 
        }
        keyExtractor={item => item.id.toString()}
        />
       </View>
       <Filter />
       </View>
       );
    }
}

function mapStateToProps(state) {
    return {
        myfilter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding: state.isAdding,
    };
}
export default connect(mapStateToProps)(Main);
