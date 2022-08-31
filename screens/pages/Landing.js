import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BellIcon} from 'react-native-heroicons/solid';
import Header from '../../components/Header';

const Landing = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <View
        style={{
          height: '90%',
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
