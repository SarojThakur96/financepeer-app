import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {BellIcon} from 'react-native-heroicons/solid';
import Header from '../../components/Header';
import ImageSlider from 'react-native-image-slider';

const Landing = () => {
  const images = [
    'https://placeimg.com/640/640/nature',
    'https://placeimg.com/640/640/people',
    'https://placeimg.com/640/640/animals',
    'https://placeimg.com/640/640/beer',
  ];

  return (
    <View style={{flex: 1}}>
      <Header />
      <ImageBackground
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}
      >
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={images}
          customSlide={({index, item, style, width}) => (
            // It's important to put style here because it's got offset inside
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{uri: item}} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
