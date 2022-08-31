import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Header from '../../components/Header';

const Location = () => {
  const [CurrentPosition, setCurrentPosition] = useState();

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(position => {
      setCurrentPosition(position?.coords);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000000', fontSize: 28, marginBottom: 40}}>
          Current Geolocation
        </Text>
        <Text style={{color: 'red', fontSize: 24}}>
          <Text style={{color: '#000000'}}>Latitude:-</Text>{' '}
          {CurrentPosition?.latitude}
        </Text>
        <Text style={{color: 'red', fontSize: 24}}>
          <Text style={{color: '#000000'}}>Longitude:-</Text>{' '}
          {CurrentPosition?.longitude}
        </Text>
      </View>
    </>
  );
};

export default Location;
