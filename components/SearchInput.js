import React, { useState } from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export default ({placeholder}) => {
  function handleChangeText() {
  
  }
  
  return (
    <View>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="white"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handeChangeTezt}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  textInput: {
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: '#666',
    borderRadius: 5,
    alignSelf: 'center',
    color: '#fff'
  }
});
