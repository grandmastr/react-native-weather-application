import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import PropTypes from 'prop-types';

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

SearchInput.defaultProps = {
  placeholder: '',
  bgColor: 'transparent'
};

export default function SearchInput({placeholder, onSubmit, bgColor}) {
  const [text, setText] = useState("");
  
  const handleTextChange = fieldText => setText(fieldText);
  const handleSubmitEditing = () => {
    if(!text) return;
    
    onSubmit(text);
    setText("");
  };
  
  return (
    <View>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="white"
        value={text}
        style={{...styles.textInput, backgroundColor: bgColor}}
        clearButtonMode="always"
        underlineColorAndroid="transparent"
        onChangeText={handleTextChange}
        onSubmitEditing={handleSubmitEditing}
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
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'center',
    color: '#fff'
  }
});

