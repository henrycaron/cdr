/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button from 'react-native-button';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styles from './home.style.js';

class CameraScreen extends React.Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>PillPapi Cam</Text>
      </View>
      );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>PillPapi Home</Text>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.props.navigation.navigate('Camera')}
              containerStyle={{padding:10, height:90, overflow:'hidden', borderRadius:4, backgroundColor: 'red'}}
              disabledContainerStyle={{backgroundColor: 'grey'}}
              style={{fontSize: 20, color: 'white'}}>
              Capture Image
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              containerStyle={{padding:10, height:90, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
              disabledContainerStyle={{backgroundColor: 'grey'}}
              style={{fontSize: 20, color: 'white'}}>
              Input Name
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              containerStyle={{padding:10, height:90, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
              disabledContainerStyle={{backgroundColor: 'grey'}}
              style={{fontSize: 20, color: 'white'}}>
              Previous Searches
            </Button>
          </View>
        </View>
            
      </SafeAreaView>
      </>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Camera: {
    screen: CameraScreen,
  },
});

export default createAppContainer(AppNavigator);