import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Button
  } from 'react-native';

import { 
    Ionicons,
    Octicons,
    Foundation

  } from '@expo/vector-icons';
  
import * as Permissions from 'expo-permissions';

export default class OutputScreen extends React.Component {

    render() {
        return (
          <Text style={styles.baseText}>
            <Text style={styles.titleText} onPress={this.onPressTitle}>
              {this.state.titleText}{'\n'}{'\n'}
            </Text>
            <Text numberOfLines={5}>
              {this.state.bodyText}
            </Text>
          </Text>
        );
      }
    }
    
    const styles = StyleSheet.create({
      baseText: {
        fontFamily: 'Cochin',
      },
      titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
    

}
