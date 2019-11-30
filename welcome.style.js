import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '400',
    color: 'black',
  },
  sectionSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '300',
    color: 'grey',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  image: {
    paddingVertical: 40,
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300, 
    height: 300,
  }
});

export default styles;