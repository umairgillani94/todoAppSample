import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TodoListingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
      }}>
      <Text style={{color: 'red'}}>Home Screen</Text>
    </View>
  );
};

export default TodoListingScreen;
