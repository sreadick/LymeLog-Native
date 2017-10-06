import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Meteor from 'react-native-meteor';
import { Link } from 'react-router-native';

export class Signup extends React.Component {
  render() {
    return (
      <View>
        <Text>Signup page</Text>
        <Link to='/login'>
          <Text>
            Link (to Login Page)
          </Text>
        </Link>
      </View>
    );
  }
}
