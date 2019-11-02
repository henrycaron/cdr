import React, { Component } from 'react';
import * as FileSystem from 'expo-file-system';

import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    Alert,
  } from 'react-native';

import { 
    Ionicons,
    Octicons,
  } from '@expo/vector-icons';
  
  
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import Button from 'react-native-button';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import homestyles from './home.style.js';
import outputstyles from './output.style.js';


class HomeScreen extends React.Component {
    render() {
      return (
        <>
          <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={homestyles.sectionContainer}>
            <Text style={homestyles.sectionTitle}>PillPapi Home</Text>
            <View style={homestyles.buttonContainer}>
              <Button
                onPress={() => this.props.navigation.navigate('Camera')}
                containerStyle={{padding:10, height:90, overflow:'hidden', borderRadius:4, backgroundColor: 'red'}}
                disabledContainerStyle={{backgroundColor: 'grey'}}
                style={{fontSize: 20, color: 'white'}}>
                Capture Image
              </Button>
            </View>
            <View style={homestyles.buttonContainer}>
              <Button
                containerStyle={{padding:10, height:90, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
                disabledContainerStyle={{backgroundColor: 'grey'}}
                style={{fontSize: 20, color: 'white'}}>
                Input Name
              </Button>
            </View>
            <View style={homestyles.buttonContainer}>
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

class OutputScreen extends React.Component {

    render() {
        return (
            <View style={ outputstyles.container}>
                <Text style={outputstyles.titleText}>Generic Name: Ibuprofen</Text>
                <SafeAreaView style={outputstyles.container}>
                        <Text style ={outputstyles.subtitleText}> Description </Text>
                            <Text style ={outputstyles.bodyText}> Nonsteroidal anti-inflammatory drug </Text>
                        <Text style ={outputstyles.subtitleText}> Alternative Brand Names </Text>
                            <Text style ={outputstyles.bodyText}>  Advil, 
                             NeoProfen, Caldolor, and more </Text>
                    <ScrollView style={outputstyles.scrollView}>
                        <Text style ={outputstyles.scrollSubtitleText}> Common Uses </Text>
                            <Text style ={outputstyles.scrollBodyText}> Ibuprofen is used to 
                                reduce fever and treat pain or inflammation caused 
                                by many conditions such as headache, toothache, 
                                back pain, arthritis, menstrual cramps, or minor 
                                injury. </Text>
                        <Text style ={outputstyles.scrollSubtitleText}> Side Effects </Text>
                        <Text style ={outputstyles.scrollBodyText}> Upset stomach, mild heartburn, nausea, vomiting, bloating, 
                        gas, diarrhea, constipation, dizziness, headache, 
                        nervousness, decreased appetite, mild itching or rash; or 
                        ringing in your ears. </Text>
                        <Text style ={outputstyles.scrollSubtitleText}> How to Use </Text>
                            <Text style ={outputstyles.scrollBodyText}>
                                Take this medication by mouth, usually every 4 
                                to 6 hours with a full glass of water (8 ounces/
                                240 milliliters) unless your doctor directs you 
                                otherwise. Do not lie down for at least 10 minutes 
                                after taking this drug. If you have stomach upset 
                                while taking this medication, take it with food, 
                                milk, or an antacid.
                                </Text>
                        <Text style = {outputstyles.scrollSubtitleText}> Find out More</Text>
                        <Button
                            title="Visit WebMD"
                            onPress={this._handleOpenWithLinking}
                            style={outputstyles.button}
                            />
                        
                    </ScrollView>
                </SafeAreaView>
            </View>

        );
      }
    }
class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ 
        hasCameraPermission: status === 'granted',
        photoURI: '',        
    });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }
  render() {
    const { hasCameraPermission, photoURI } = this.state;
    
    console.log('photoURI', photoURI)
    if (photoURI !==''){
        return(
            <View style={styles.container}>
                <Image
                  style={styles.pillimage}
                  source={{ uri: this.state.photoURI}}
                />
                <Text style={styles.title}> Your Image </Text>
                <View style = {styles.OutputButtonContainer}>
                   <TouchableOpacity
                        onPress={() => this.setState({ photoURI: ''})}
                        style={{ alignSelf: 'center' }}
                        >
                        <Octicons name="arrow-left" size={70} color="black" />
                    </TouchableOpacity>
                     
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Output')}
                        style={{ alignSelf: 'center' }}
                        >
                        <Octicons name="check" size={70} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        
        )
    }
    
    else if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}
          ref={ref => {
            this.camera = ref;
            }}>
            <View
              style={{
                flex: 8,
                backgroundColor: 'transparent',
                flexDirection: 'column',
              }}>
              <View style = {{flex: 0.5}, {justifyContent: "center"}}>
              <TouchableOpacity
                style={{
                  flex: 0.3,
                  alignSelf: 'flex-start',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Ionicons name="ios-swap" size={40} color="white" />
                </TouchableOpacity>
                </View>
                <View style={styles.CircleShapecontainer}>
                    <View style={styles.CircleShapeView}></View>
                    <Text style={styles.title}> Capture capsule within guide </Text>
                </View>
            </View>
            <View style={{ flex: 2}}>
                <TouchableOpacity
                    onPress = {this.snap.bind(this)}
                    style={{ alignSelf: 'center' }}
                >
                <Ionicons name="ios-radio-button-on" size={70} color="white" />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }

  
  snap = async () => {
    console.log("Snap Image")
    if (this.camera) {
        console.log("In This Camera")
    
        let photo = await this.camera.takePictureAsync({
          quality:0.5,
          skipProcessing:true
      });
      console.log("Printed Image", photo.uri)
      this.setState({
        photoURI: photo.uri
      })
    }
  };
}


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 5,
    },
    title: {
        alignSelf: 'center',
        color: 'white',
        textShadowColor:'#585858',
        textShadowOffset:{width: 0, height: 0},
        textShadowRadius:10,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    captureButtonSection: {
      width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    CircleShapecontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CircleShapeView: {
        width: 250,
        height: 250,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white'
    },   
     backButton: {
        flex: 0.3, 
        height: 60, 
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
      okayButton: {
        flex: 0.3, 
        height: 60, 
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
      bottomBar: {
        backgroundColor: 'transparent',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flex: 0.12,
        flexDirection: 'row',
    },
    pillimage: {
        width: 300, 
        height: 300,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'grey',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    OutputButtonContainer: {
        flex: .5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

  });
  
  const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Camera: {
      screen: CameraScreen,
    },
    Output: {
        screen: OutputScreen,
      },
  });
  
export default createAppContainer(AppNavigator);