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
// import { variableDeclaration } from '@babel/types';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
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
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.3,
                  alignSelf: 'flex-end',
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
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                <View style={styles.CircleShapecontainer}>
                    <View style={styles.CircleShapeView}></View>
                    <Text style={styles.title}> Capture capsule within guide </Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 2}}>
                <TouchableOpacity
                    onPress={this.snap.bind(this)}
                
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
    console.log("Print Image")
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({
          quality:0.5,
          skipProcessing:true
      });
      console.log("Printed Image")
      this.setState({
          photoURI: photo.uri,
          showCamera: false
      });
      <View>
         <Image
            source={{uri: this.state.photoURI}}
            style={{ flex: 1,
            transform:[{scale:0.9}]}}
            />
        </View>
    }
  };
}

  class OutputScreen extends React.Component {
    render() {
      return (
        <View>
         <Image
        // style={{ width: 100, height: 100, position:'flex-center' }}
            source={{uri: this.state.photoURI}}
            style={{ flex: 1,
            transform:[{scale:0.9}]}}
            />
        </View>
    //     <View style={styles.bottomBar}>
    //     <TouchableOpacity style={styles.bottomButton} onPress={() => this.props.navigation.navigate('Camera')}>
    //       <Octicons name="kebab-horizontal" size={30} color="white"/>
    //     </TouchableOpacity>
    //     <View style={{ flex: 0.4 }}>
    //       <TouchableOpacity
    //         onPress={this.takePicture}
    //         style={{ alignSelf: 'center' }}
    //       >
    //         <Ionicons name="ios-radio-button-on" size={70} color="white" />
    //       </TouchableOpacity>
    //     </View> 
    //     <TouchableOpacity style={styles.bottomButton} onPress={() => this.props.navigation.navigate('DrugName')}>
    //       <View>
    //         <Foundation name="thumbnails" size={30} color="white" />
    //       </View>
    //     </TouchableOpacity>
    //   </View>
      );
    }
  }
  
  class DrugNameScreen extends React.Component {
    render() {
      return (
        <View>
      
    </View>
      ) ;
    }
  }
  
  const RootStack = createStackNavigator(
    {
      Camera: CameraScreen,
      Output: OutputScreen,
      DrugName: DrugNameScreen
    },
    
    {
      initialRouteName: 'Camera',
    }
  );
  
   const AppContainer = createAppContainer(RootStack);
  
    export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        marginTop: 5,
        position: 'absolute'
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
        flex: 3,
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

  });