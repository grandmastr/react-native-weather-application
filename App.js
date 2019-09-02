//Dependencies
import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Platform, ImageBackground, StyleSheet } from 'react-native';
//Files
import SearchInput from './components/SearchInput';
//helpers
import getimageForWeather from './utils/getImageForWeather';

export default () => {
  const [location, setLocation] = useState("San Franciso");
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={getimageForWeather('Clear')}
        style={styles.imageContainer}
        imageStylye={styles.image}
      >
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>
            {location}
          </Text>
          <Text style={[styles.smallText, styles.textStyle]}>
            Light Cloud
          </Text>
          <Text style={[styles.largeText, styles.textStyle]}>
            24°
          </Text>
        
          <SearchInput placeholder="Search any city..."/>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E'
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular'
      },
      android: {
        fontFamily: 'Roboto'
      }
    }),
    color: 'white'
  },
  smallText: {
    fontSize: 22
  },
  largeText: {
    fontSize: 50
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});
