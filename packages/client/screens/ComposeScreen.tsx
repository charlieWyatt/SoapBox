import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useMutation } from 'react-query';
import { createTweet } from '../services/api';

export default function ComposeScreen() {
  const [tweetText, setTweetText] = useState('');
  const mutation = useMutation(createTweet);

  const handleTweet = () => {
    mutation.mutate({ text: tweetText });
    setTweetText('');
  };

  return (
    <View>
      <TextInput
        placeholder="What's happening?"
        value={tweetText}
        onChangeText={setTweetText}
      />
      <Button title="Tweet" onPress={handleTweet} disabled={mutation.isLoading || !tweetText} />
    </View>
  );
}