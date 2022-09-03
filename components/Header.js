import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        alignItems: 'center',
        zIndex: 10,
        backgroundColor: '#fff',
      }}
    >
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: 50,
          height: 50,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../assets/images/Financepeer.png')}
        style={{
          width: 80,
          height: 80,
          resizeMode: 'contain',
          marginLeft: 100,
        }}
      />
      {/* </View> */}
    </View>
  );
};

export default Header;
