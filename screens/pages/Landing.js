import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  FlatList,
  useWindowDimensions,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import Header from '../../components/Header';

const Landing = () => {
  const {width} = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const data = [
    {
      id: '1',
      image:
        'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1093840488-5-scaled.jpg',
    },
    {
      id: '2',
      image:
        'https://www.iucn.org/sites/default/files/content/images/2020/shutterstock_1458128810.jpg',
    },
    {
      id: '3',
      image:
        'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000',
    },
    {
      id: '4',
      image:
        'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
    },
    {
      id: '5',
      image:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
  ];
  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            width: width,
            height: 300,
            resizeMode: 'contain',
            justifyContent: 'center',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            height: 64,
            position: 'absolute',
            bottom: 0,
          }}>
          {data.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.7, 1, 0.7],
              extrapolate: 'clamp',
            });
            const backgroundColor = scrollX.interpolate({
              inputRange,
              outputRange: ['#ffffff', '#493d8a', '#ffffff'],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor,
                  marginHorizontal: 8,
                  opacity,
                }}
                key={i.toString()}
              />
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?cs=srgb&dl=pexels-arun-thomas-1156684.jpg&fm=jpg',
        }}
        resizeMode="cover"
        style={{flex: 1}}>
        <Header />
        <View
          style={{
            marginVertical: 150,
          }}>
          <FlatList
            data={data}
            renderItem={({item}) => <RenderItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={item => item.id}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            scrollEventThrottle={32}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
