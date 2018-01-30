import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBCxH9Uf6rEyCDvRSf7KO4fU8aOzqPGFw0',
    authDomain: 'rn-auth-c7724.firebaseapp.com',
    databaseURL: 'https://rn-auth-c7724.firebaseio.com',
    projectId: 'rn-auth-c7724',
    storageBucket: 'rn-auth-c7724.appspot.com',
    messagingSenderId: '1056238207983'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false})
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;

    }


    if(this.state.loggedIn) {
      return (
        <Button>
          Log out
        </Button>
      )
    }


  }


  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
      </View>

    );
  }
}

export default App;
