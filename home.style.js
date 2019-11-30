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
    backgroundColor: 'white',
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    color: 'black',
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
});

export default styles;

// const styles = StyleSheet.create({
//     container: {
//         alignSelf: 'center',
//         marginTop: 5,
//     },
//     title: {
//         alignSelf: 'center',
//         color: 'white',
//         textShadowColor:'#585858',
//         textShadowOffset:{width: 0, height: 0},
//         textShadowRadius:10,
//     },
//     fixToText: {
//       flexDirection: 'row',
//       justifyContent: 'space-between'
//     },
//     separator: {
//       marginVertical: 8,
//       borderBottomColor: '#737373',
//       borderBottomWidth: StyleSheet.hairlineWidth
//     },
//     captureButtonSection: {
//       width: '100%',
//       height: '30%',
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     CircleShapecontainer: {
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     CircleShapeView: {
//         width: 250,
//         height: 250,
//         borderRadius: 50,
//         borderWidth: 2,
//         borderColor: 'white'
//     },   
//      backButton: {
//         flex: 0.3, 
//         height: 60, 
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//     },
//       okayButton: {
//         flex: 0.3, 
//         height: 60, 
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//     },
//       bottomBar: {
//         backgroundColor: 'transparent',
//         alignSelf: 'center',
//         justifyContent: 'space-between',
//         flex: 0.12,
//         flexDirection: 'row',
//     },
//     pillimage: {
//         width: 300, 
//         height: 300,
//         borderRadius: 50,
//         borderWidth: 2,
//         borderColor: 'grey',
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
        
//     },
//     OutputButtonContainer: {
//         flex: .5,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//     },

//   });