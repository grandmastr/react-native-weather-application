//Dependencies
import React, { useState, useEffect } from 'react';

import { KeyboardAvoidingView, View, Text, TextInput, Platform, ImageBackground, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
//Files
import SearchInput from './components/SearchInput';
//helpers
import getImageForWeather from './utils/getImageForWeather';
import { fetchLocationId, fetchWeather } from "./utils/api";

export default () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState("Snow");
  
  
  useEffect(() => {
    handleUpdateLocation("Lagos")
      .catch(error => console.warn(error));
  }, []);
  
  const handleUpdateLocation = async newLocation => {
      if (!newLocation) return;
      if (location !== newLocation) setLocation(newLocation);
    
      setLoading(true);
      
      try {
        const locationID = await fetchLocationId(newLocation);
        const { location, weather, temperature } = await fetchWeather(locationID);
        
        setLoading(false);
        setError(false);
        setLocation(location);
        setWeather(weather);
        setTemperature(temperature);
        
      } catch(e) {
        setLoading(false);
        setError(true);
      }
  };
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar barStyle="light-content"/>
      <ImageBackground
        source={getImageForWeather(weather).backgroundImage}
        style={styles.imageContainer}
        imageStylye={styles.image}
      >
        <View style={styles.detailsContainer}>
          <ActivityIndicator animating={loading} color="white" size="large"/>
          {!loading && (
            <View>
              {error && (
                <Text style={[styles.smallText, styles.textStyle]}>
                  Could not load weather, please try a different city
                </Text>
              )}
              
              {!error && (
                <View>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {location}
                  </Text>
                  <Text style={[styles.smallText, styles.textStyle]}>
                    {weather}
                  </Text>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {Math.round(temperature)}°C
                  </Text>
                </View>
              )}
            </View>
          )}
        
          <SearchInput placeholder="Search any city..." onSubmit={handleUpdateLocation} bgColor={getImageForWeather(weather).backgroundColor}/>
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
