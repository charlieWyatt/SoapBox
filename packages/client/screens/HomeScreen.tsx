import React from 'react';
import { View, Text } from 'react-native';
import Feed from '../components/Feed';

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Text>Welcome to Twitter Clone</Text>
      <Feed />
    </View>
  );
};

export default HomeScreen;