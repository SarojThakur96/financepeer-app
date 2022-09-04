import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

import Header from '../../components/Header';
import Data from '../../assets/mock/data.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const JsonData = () => {
  const [localData, setLocalData] = useState([]);

  const saveData = async () => {
    const strigifyValue = JSON.stringify(Data);
    await AsyncStorage.setItem('JsonData', strigifyValue);
    const data = await AsyncStorage.getItem('JsonData');
    if (data !== null) {
      setLocalData(JSON.parse(data));
    }
  };

  return (
    <>
      <Header />

      <ScrollView
        style={{
          marginHorizontal: 10,
        }}>
        {localData.map(item => (
          <Card
            key={item.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              marginVertical: 10,
            }}>
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.body}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Button
          mode="contained"
          color="#000"
          style={{borderRadius: 10, width: '95%'}}
          onPress={saveData}>
          Get Json Data & Save to Local Storage{' '}
        </Button>
      </View>
    </>
  );
};

export default JsonData;
