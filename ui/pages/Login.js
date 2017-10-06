import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Meteor from 'react-native-meteor';
import { Link } from 'react-router-native';

export class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Page...</Text>
        <Link to='/signup'>
          <Text>
            Link (to Signup Page)
          </Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
