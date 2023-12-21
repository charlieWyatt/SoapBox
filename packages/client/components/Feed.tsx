import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Tweet } from './Tweet';
import { api } from '../services/api';

interface TweetData {
  id: string;
  content: string;
  user: {
    id: string;
    username: string;
  };
}

export const Feed = () => {
  const [tweets, setTweets] = useState<TweetData[]>([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await api.get('/tweets');
        setTweets(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <View>
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
    </View>
  );
};