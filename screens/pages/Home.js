import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  HomeIcon,
  UploadIcon,
  CalculatorIcon,
  DocumentTextIcon,
  MapIcon,
} from 'react-native-heroicons/solid';
import Landing from './Landing';
import ImageUpload from './ImageUpload';
import Location from './Location';
import JsonData from './JsonData';
import ApiData from './ApiData';
export const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{}}
      barStyle={{
        padding: 10,
        backgroundColor: '#000',
      }}
      activeColor="#fff"
      inactiveColor="#828282">
      <Tab.Screen
        component={Landing}
        name="HOME"
        options={{
          tabBarIcon: ({color}) => <HomeIcon color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={ImageUpload}
        name="PHOTO"
        options={{
          tabBarIcon: ({color}) => <UploadIcon color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={Location}
        name="LOCATION"
        options={{
          tabBarIcon: ({color}) => <MapIcon color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={JsonData}
        name="JSON DATA"
        options={{
          tabBarIcon: ({color}) => <DocumentTextIcon color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={ApiData}
        name="API Data"
        options={{
          tabBarIcon: ({color}) => <CalculatorIcon color={color} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
