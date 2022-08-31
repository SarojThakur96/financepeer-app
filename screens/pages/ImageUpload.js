import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {CameraIcon} from 'react-native-heroicons/solid';
import {launchCamera} from 'react-native-image-picker';

import Header from '../../components/Header';

const ImageUpload = () => {
  const [imageFile, setImageFile] = useState([]);
  const UploadActionCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.5,
      cameraType: 'front',
    });
    setImageFile(result?.assets[0]);
    console.log(result);
  };

  return (
    <>
      <Header />
      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri:
              imageFile?.uri ||
              'https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-portrait.jpg',
          }}
          style={{
            marginTop: 10,
            height: 300,
            width: 300,
            resizeMode: 'contain',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#000000',
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              marginVertical: 20,
              padding: 8,
              borderWidth: 1,
              borderColor: '#000000',
              borderTopRightRadius: 12,
              borderBottomLeftRadius: 12,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginRight: 20,
              backgroundColor: '#fff',
            }}
            activeOpacity={0.4}
            onPress={UploadActionCamera}>
            <Text
              style={{
                fontSize: 15,
                color: '#000000',
                marginRight: 5,
                marginBottom: 3,
              }}>
              Launch Camera
            </Text>
            <CameraIcon color="#000000" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({});
