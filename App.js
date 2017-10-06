import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Meteor, { Accounts, createContainer } from 'react-native-meteor';
import { NativeRouter, Route, Switch, Link } from 'react-router-native';

import { Landing } from './ui/pages/Landing';
import { Login } from './ui/pages/Login';
import { Signup } from './ui/pages/Signup';
import { NotFound } from './ui/pages/NotFound';

Meteor.connect('ws://192.168.86.183:3000/websocket');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }
  loginUser() {
    // Alert.alert(this.state.password)
    const email = this.state.email;
    const password = this.state.password;

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        Alert.alert('error...')
        console.error(err)
      } else {
        Alert.alert('login success')
      }
    });
  }
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          {/* <Text style={styles.heading}>Heading</Text>
          <Text style={styles.paragraph}>text...</Text>
          <View style={styles.blocks}>
            <View style={styles.block1}></View>
            <View style={styles.block2}></View>
            <View style={styles.block3}></View>
          </View> */}

          {/* <TextInput name='email' style={{height: 50, width: 200}} placeholder='email' onChangeText={(email) => this.setState({email})}/>
          <TextInput secureTextEntry name='passowrd' style={{height: 50, width: 200}} placeholder='password' onChangeText={(password) => this.setState({password})}/>
          <Button title='Login' onPress={this.loginUser.bind(this)}/> */}

          {/* <Text>Home...</Text> */}
          {/* <Link to='/'>
            <Text>
              Link (to Landing)
            </Text>
          </Link>
          <Link to='/login'>
            <Text>
              Link (to Login Page)
            </Text>
          </Link> */}
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route component={NotFound} />
          </Switch>
        </View>
      </NativeRouter>
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

export default createContainer(() => {
  const userSymptoms = Meteor.collection('userSymptoms').find();
  return {

  }
}, App);
