import React from 'react';
import * as FileSystem from 'expo-file-system';

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
import { Camera } from 'expo-camera';




export default class CameraScreen extends React.Component {
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
                        onPress={() => this.setState({ DrugScreen: 'true'})}
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
                    onPress={this.snap}
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