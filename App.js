/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import config from './src/config.json';
import yml from './src/asset.yml';
import img from './src/img.png';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    const err = new Error('error with a stack trace');

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.welcome}>
            Welcome to React Native!!!! {config.foo}
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js {yml.integer}
          </Text>
          <Text style={styles.instructions}>
            {err.stack}
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
          <Image source={img} style={styles.image} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scroll: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 200,
  }
});
