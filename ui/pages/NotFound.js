import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Link } from 'react-router-native';

export class NotFound extends React.Component {
  render() {
    return (
      <View>
        <Text>Sorry, this page does not exist.</Text>
        <Link to='/login'>
          <Text>
            Link (to Login Page)
          </Text>
        </Link>
        <Link to='/signup'>
          <Text>
            Link (to Signup Page)
          </Text>
        </Link>
      </View>
    );
  }
}
