import React, { Component } from 'react';

import {
    StyleSheet,
  } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',

    },
    titleText: {
        fontWeight: '600',
        fontSize: 36, 
        color: '#0080ff',
        textAlign: 'center'
    },
    subtitleText: {
        fontWeight: '400',
        fontSize: 24, 
        color: 'black',
        textAlign: 'center'
    },
    bodyText: {
        fontWeight: '300',
        fontSize: 18,
        color: 'grey',
        justifyContent: 'center',
        textAlign: 'left'
    },
    scrollSubtitleText: {
        fontWeight: '200',
        fontSize: 24, 
        color: '#F5F5F5',
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    scrollBodyText: {
        fontWeight: '100',
        fontSize: 20,
        color: '#F5F5F5',
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
    
    },
    safearea: {
        backgroundColor: 'white',
        marginHorizontal: 50,
    }
});

export default styles;