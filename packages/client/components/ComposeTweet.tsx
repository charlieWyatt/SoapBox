import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useMutation } from '@trpc/client';

import { api } from '../services/api';

export const ComposeTweet = () => {
  const [text, setText] = useState('');
  const createTweetMutation = useMutation(api.endpoints.createTweet);

  const handleComposeTweet = async () => {
    try {
      await createTweetMutation.mutate({ text });
      setText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="What's happening?"
        multiline
        numberOfLines={4}
        maxLength={280}
      />
      <Button title="Tweet" onPress={handleComposeTweet} disabled={!text} />
    </View>
  );
};