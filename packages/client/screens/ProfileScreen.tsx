import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserProfile from '../components/UserProfile';
import { useAuth } from '../services/auth';

const ProfileScreen: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You are not logged in.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <UserProfile user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProfileScreen;