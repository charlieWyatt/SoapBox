import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface UserProfileProps {
  user: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.details}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
    color: 'gray',
  },
});

export default UserProfile;