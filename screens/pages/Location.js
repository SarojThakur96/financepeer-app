import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Header from '../../components/Header';
import {Card, Title, Paragraph} from 'react-native-paper';

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
        <Card
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            marginVertical: 10,
            width: '90%',
          }}>
          <Card.Content
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title style={{color: 'red'}}>Latitude:-</Title>
            <Paragraph style={{color: 'red'}}>
              {' '}
              {CurrentPosition?.latitude}
            </Paragraph>
          </Card.Content>
          <Card.Content
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title style={{color: 'red'}}>Longitude:-</Title>
            <Paragraph style={{color: 'red'}}>
              {' '}
              {CurrentPosition?.longitude}
            </Paragraph>
          </Card.Content>
          <Card.Cover
            source={{
              uri: 'https://digitalattic.com/wp-content/uploads/2019/11/blog-geolocation.jpg',
            }}
          />
        </Card>
      </View>
    </>
  );
};

export default Location;
