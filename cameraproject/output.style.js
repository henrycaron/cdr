import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    SafeAreaView, 
    ScrollView,
    Linking,
    Button
  } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#708090',

    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 36, 
        color: 'white',
        marginTop: 50,
        textAlign: 'center'
    },
    subtitleText: {
        fontWeight: 'bold',
        fontSize: 18, 
        color: 'white',
        textAlign: 'center'
    },
    bodyText: {
        fontWeight: 'normal',
        fontSize: 14,
        color: '#F5F5F5',
        justifyContent: 'center',
        textAlign: 'center'
    },
    scrollSubtitleText: {
        fontWeight: '200',
        fontSize: 18, 
        color: '#708090',
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    scrollBodyText: {
        fontWeight: '100',
        fontSize: 14,
        color: '#708090',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 50,
      },
    button: {
        marginVertical: 10,
        marginHorizontal: 50
    
    }
});

export default styles;