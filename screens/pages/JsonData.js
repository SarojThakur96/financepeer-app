import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

import Header from '../../components/Header';
import data from '../../assets/mock/data.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const JsonData = () => {
  const saveData = async () => {
    const strigifyValue = JSON.stringify(data);
    await AsyncStorage.setItem('JsonData', strigifyValue);
  };

  return (
    <>
      <Header />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingVertical: 10,
          justifyContent: 'flex-end',
        }}>
        <Button mode="contained" color="#000" onPress={saveData}>
          Get Json Data & Save to Local Storage{' '}
        </Button>
      </View>
    </>
  );
};

export default JsonData;
