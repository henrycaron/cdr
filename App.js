import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    SafeAreaView, 
    ScrollView,
    Linking,
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
            <View style={ styles.container}>
                <Text style={styles.titleText}>Ibuprofen</Text>
                <SafeAreaView style={styles.container}>
                        <Text style ={styles.subtitleText}> Description </Text>
                            <Text style ={styles.bodyText}> Nonsteroidal anti-inflammatory drug </Text>
                        <Text style ={styles.subtitleText}> Alternative Brand Names </Text>
                            <Text style ={styles.bodyText}>  Advil, 
                             NeoProfen, Caldolor, and more </Text>
                    <ScrollView style={styles.scrollView}>
                        <Text style ={styles.scrollSubtitleText}> Common Uses </Text>
                            <Text style ={styles.scrollBodyText}> Ibuprofen is used to 
                                reduce fever and treat pain or inflammation caused 
                                by many conditions such as headache, toothache, 
                                back pain, arthritis, menstrual cramps, or minor 
                                injury. </Text>
                        <Text style ={styles.scrollSubtitleText}> Side Effects </Text>
                        <Text style ={styles.scrollBodyText}> Upset stomach, mild heartburn, nausea, vomiting, bloating, 
                        gas, diarrhea, constipation, dizziness, headache, 
                        nervousness, decreased appetite, mild itching or rash; or 
                        ringing in your ears. </Text>
                        <Text style ={styles.scrollSubtitleText}> How to Use </Text>
                            <Text style ={styles.scrollBodyText}>
                                Take this medication by mouth, usually every 4 
                                to 6 hours with a full glass of water (8 ounces/
                                240 milliliters) unless your doctor directs you 
                                otherwise. Do not lie down for at least 10 minutes 
                                after taking this drug. If you have stomach upset 
                                while taking this medication, take it with food, 
                                milk, or an antacid.
                                </Text>
                        <Text style = {styles.scrollSubtitleText}> Find out More</Text>
                        <Button
                            title="Visit WebMD"
                            onPress={this._handleOpenWithLinking}
                            style={styles.button}
                            />
                        
                    </ScrollView>
                </SafeAreaView>
            </View>

        );
      }
    }
    
_handleOpenWithLinking = () => {
    Linking.openURL('https://expo.io');
}
      
    
    
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
