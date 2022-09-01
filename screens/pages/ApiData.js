import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Button} from 'react-native-paper';

import Header from '../../components/Header';

const ApiData = () => {
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);
    fetch(
      'https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=400',
    )
      .then(res => res.json())
      .then(data => setLoading(false));
  };

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <Header />
      {!!loading ? (
        <Image
          source={require('../../assets/images/Spinner.gif')}
          style={{
            width: 120,
            height: 120,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginVertical: 200,
          }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: 'flex-end',
          }}
        >
          <Button mode="contained" color="#000" onPress={callData}>
            Call API
          </Button>
        </View>
      )}
    </View>
  );
};

export default ApiData;
