import React, {useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

import Header from '../../components/Header';

const ApiData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const callData = async () => {
    setLoading(true);
    fetch(
      'https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=400',
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  };

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <Header />
      {!!loading ? (
        <Image
          source={require('../../assets/images/Spinner.gif')}
          style={{
            width: 160,
            height: 160,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginVertical: 192,
          }}
        />
      ) : (
        <ScrollView
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginHorizontal: 20,
            marginVertical: 50,
            padding: 10,
            borderWidth: 0.5,
            borderColor: 'lightGray',
            borderRadius: 5,
            width: '90%',
            borderRadius: 20,
          }}>
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                padding: 10,
                elevation: 3,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 38,
                }}>
                {item}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Button
          mode="contained"
          color="#000"
          onPress={callData}
          style={{borderRadius: 10, width: '80%'}}>
          Call API
        </Button>
      </View>
    </View>
  );
};

export default ApiData;
