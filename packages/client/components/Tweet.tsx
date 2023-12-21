import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TweetProps {
  username: string;
  content: string;
  timestamp: string;
}

const Tweet: React.FC<TweetProps> = ({ username, content, timestamp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default Tweet;