import React, { Component } from 'react';
import * as ImageManipulator from 'expo-image-manipulator';
// import * as smartcrop from "smartcrop";

import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    TextInput,
  } from 'react-native';

import { 
    Ionicons,
    Octicons,
  } from '@expo/vector-icons';
  
  import ManualInput from './src/screens/ManualInput';
  import { dictionary } from './src/screens/dictionary';
  
import shortid from "shortid";
import {Autocomplete} from "react-native-dropdown-autocomplete";
  
  
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import ImagePicker from 'react-native-image-crop-picker';
import Button from 'react-native-button';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import homestyles from './home.style.js';
import outputstyles from './output.style.js';
import welcomestyles from './welcome.style.js';
import inputstyles from './input.style.js';

class WelcomeScreen extends React.Component {
    render() {
        return (
                <View style={welcomestyles.sectionContainer}>
                    <Text style={welcomestyles.sectionTitle}>Welcome to ScriptCheck!</Text>
                        <Image source={require('./src/images/demoimage.png')} 
                            style={welcomestyles.image}/>
                             <Text style ={styles.title}> Snap an image of your pill to
                                discover what it is. </Text>
                    <View style={welcomestyles.buttonContainer}>
                      <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        containerStyle={{padding:20, height:30, justifyContent: 'space-around',overflow:'hidden', borderRadius:4, backgroundColor: '#009ACD'}}
                        disabledContainerStyle={{backgroundColor: 'grey'}}
                        style={{fontSize: 20, color: 'white'}}>
                        Begin
                      </Button>
                    </View>
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
          <View style={homestyles.sectionContainer}>
            <Text style={welcomestyles.sectionTitle}>ScriptCheck Home</Text>
            <Text style={welcomestyles.sectionSubtitle}>Choose an option to learn about your medication</Text>
            <View style={homestyles.buttonContainer}>
              <Button
                onPress={() => this.props.navigation.navigate('Camera')}
                containerStyle={{padding:10, height:150, justifyContent: 'space-around',overflow:'hidden', borderRadius:4, backgroundColor: '#009ACD'}}
                disabledContainerStyle={{backgroundColor: 'grey'}}
                style={{fontSize: 16, color: 'grey'}}>
                <View style={styles.CircleShapecontainer}>
                    <Ionicons name="ios-camera" size={90} color="#ebebeb" />
                    <Text style={{fontSize: 18, color: '#ebebeb', textAlign: 'center'}}>Take photo of medication</Text>
                </View>
              </Button>
            </View>
            <View style={homestyles.buttonContainer}>
              <Button
                onPress={() => this.props.navigation.navigate('ManualInput')}
                containerStyle={{padding:10, height:150, justifyContent: 'space-around',overflow:'hidden', borderRadius:4, backgroundColor: '#009ACD'}}
                disabledContainerStyle={{backgroundColor: 'grey'}}
                style={{fontSize: 16, color: 'grey'}}>
                <View style={styles.CircleShapecontainer}>
                    <Octicons name="keyboard" size={90} color="#ebebeb" />
                    <Text style={{fontSize: 18, color: '#ebebeb', textAlign: 'center'}}>Enter medication name</Text>
                </View>
              </Button>
            </View>
          </View>
              
        </SafeAreaView>
        </>
      );
    }
  }


  class OutputScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          descriptioncontent: false,
          brandcontent: false,
          sideeffects: false,
          donttake: false  ,
        }
    }
    
    descriptioncomponentHideAndShow = () => {
        this.setState(previousState => ({ descriptioncontent: !previousState.descriptioncontent }))
    }
    brandcomponentHideAndShow = () => {
        this.setState(previousState => ({ brandcontent: !previousState.brandcontent }))
    }
    sideeffectscomponentHideAndShow = () => {
        this.setState(previousState => ({ sideeffects: !previousState.sideeffects }))
    }
    donttakecomponentHideAndShow = () => {
        this.setState(previousState => ({ donttake: !previousState.donttake }))
    }
      
    render() {
        const { navigation } = this.props;
        druginfo = navigation.getParam('itemData', 'Not Found');
        return (
            <View style={outputstyles.container}>
                <Text style={outputstyles.subtitleText}> Your drug's name: </Text>
                <Text style={outputstyles.titleText}> {((JSON.stringify(druginfo.name)).slice(1, (JSON.stringify(druginfo.name)).length - 1))} </Text>     
                
                <ScrollView style={outputstyles.safearea}>
                    <TouchableOpacity onPress={this.descriptioncomponentHideAndShow}>
                        <View style = {styles.OutputSubtitlecontainer}>
                            <Text style ={outputstyles.subtitleText}> Description </Text>
                            { this.state.descriptioncontent ? 
                                      <Ionicons name="ios-arrow-dropdown" size={20} color="black" /> : 
                                      <Ionicons name="ios-arrow-dropleft" size={20} color="black" />
                                }
                        </View>
                    </TouchableOpacity>                    
                    { this.state.descriptioncontent ? 
                        <Text style ={outputstyles.bodyText}> 
                            {((JSON.stringify(druginfo.uses)).slice(1, (JSON.stringify(druginfo.uses)).length - 1))}  
                        </Text> : null
                    }
                    
                    <TouchableOpacity onPress={this.brandcomponentHideAndShow}>
                        <View style = {styles.OutputSubtitlecontainer}>
                            <Text style ={outputstyles.subtitleText}> Common Brands </Text>
                            { this.state.brandcontent ? 
                                      <Ionicons name="ios-arrow-dropdown" size={20} color="black" /> : 
                                      <Ionicons name="ios-arrow-dropleft" size={20} color="black" />
                                }
                        </View>
                    </TouchableOpacity>                    
                    { this.state.brandcontent ? 
                        <Text style ={outputstyles.bodyText}> 
                            {((JSON.stringify(druginfo.alts)).slice(1, (JSON.stringify(druginfo.alts)).length - 1))}  
                        </Text> : null
                    }
                    
                    <TouchableOpacity onPress={this.sideeffectscomponentHideAndShow}>
                        <View style = {styles.OutputSubtitlecontainer}>
                            <Text style ={outputstyles.subtitleText}> SideEffects </Text>
                            { this.state.sideeffects ? 
                                      <Ionicons name="ios-arrow-dropdown" size={20} color="black" /> : 
                                      <Ionicons name="ios-arrow-dropleft" size={20} color="black" />
                                }
                        </View>
                    </TouchableOpacity>                    
                    { this.state.sideeffects ? 
                        <Text style ={outputstyles.bodyText}> 
                            {((JSON.stringify(druginfo.side_effects)).slice(1, (JSON.stringify(druginfo.side_effects)).length - 1))}  
                        </Text> : null
                    }
                    
                    <TouchableOpacity onPress={this.donttakecomponentHideAndShow}>
                        <View style = {styles.OutputSubtitlecontainer}>
                            <Text style ={outputstyles.subtitleText}> Do not take if you: </Text>
                            { this.state.donttake ? 
                                      <Ionicons name="ios-arrow-dropdown" size={20} color="black" /> : 
                                      <Ionicons name="ios-arrow-dropleft" size={20} color="black" />
                                }
                        </View>
                    </TouchableOpacity>                    
                    { this.state.donttake ? 
                        <Text style ={outputstyles.bodyText}> 
                            {((JSON.stringify(druginfo.donottake)).slice(1, (JSON.stringify(druginfo.donottake)).length - 1))}  
                        </Text> : null
                    }
                    
                </ScrollView>
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
        //image,
    });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }
  
  _rotate90andFlip = async () => {
    console.log("hello");
    const manipResult = await ImageManipulator.manipulateAsync(
      this.state.photoURI,
      [{ rotate: 90 }, { flip: ImageManipulator.FlipType.Vertical }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    this.setState({ image: manipResult });
  };
  

  render() {
    const { hasCameraPermission, photoURI } = this.state;
    this.iteminfo = dictionary("Ibuprofen");
    console.log('photoURI', photoURI)
    
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (photoURI ==''){
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
                </View>
                <View style={styles.CircleShapecontainer}>
                    <View style={styles.CircleShapeView}></View>
                    <Text style={styles.title}> Capture capsule within guide </Text>
                </View>
            </View>
            <View style={{ flex: 2}}>
                <TouchableOpacity
                    onPress = {
                    this.snap.bind(this)
                    }
                    style={{ alignSelf: 'center' }}
                >
                <Ionicons name="ios-radio-button-on" size={70} color="white" />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
    else {
        return(
            
            <View style={styles.container}>
                <Image
                  style={styles.CircleShapeView}
                  source={{ uri: this.state.photoURI}}
                />
                <Text style={styles.title}> Your Image </Text>
                <View style = {styles.OutputButtonContainer}>
                   <TouchableOpacity
                        onPress={() => this.setState({ photoURI: ''})}
                        style={{ alignSelf: 'center' }}
                        >
                        <Ionicons name="ios-refresh" size={60} color="black" />
                    </TouchableOpacity>
                     
                    <TouchableOpacity
                         onPress={() => {
                            this.props.navigation.navigate('Output', {
                              itemData: this.iteminfo,
                            });
                          }}
                        >
                        <Ionicons name="ios-checkmark" size={100} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
        
        )
    }
  }

  
  snap = async () => {
    console.log("Snap Image")
    if (this.camera) {
        console.log("In This Camera")
    
        let photo = await this.camera.takePictureAsync({
          quality:0.5,
          skipProcessing:true,
      });
    //   smartcrop.crop(photo, {width:100, height: 100}).then(function(result){
    //     console.log(result);
    //   });
      console.log("Printed Image", photo.uri)
      
      this.setState({
        photoURI: photo.uri
      })
    }
  };
}

// function dictionary(itemname) {
    
//     var drugs = {
//         "Ibuprofen" : "Ibuprofen",
//         "Advil" : "Ibuprofen",
//         "Acetaminophen" : "Acetaminophen",
//         "Tylenol" : "Acetaminophen",
//         "Robitussin" : "Dextromethorphan",
//         "Dextromethorphan" : "Dextromethorphan",
//      }
     
//     var dict = {};
//     console.log("In Dictionary");
//     console.log(itemname);
    
    
//     dict["Ibuprofen"] = {
//         name: "Ibuprofen",
//         alts: "Advil, NeoProfen",
//         uses :"Nonsteroidal anti-inflammatory drug",
//         side_effects: "diarrhea, nausea, vomiting, dyspepsia, involving upper abdominal\
//         pain, bloating, and indigestion, pain in the stomach or intestines",
//         donottake: "are sensitive to aspirin or any other NSAID,\
//         have, or have had, a peptic ulcer\
//         have severe heart failure"
//     };
    
//     dict["Acetaminophen"] = {
//         name:"Acetaminophen",
//         alts: "Tylenol, Ofirmev, Mapap",
//         uses:"Can treat minor aches and pains, and reduces fever.",
//         side_effects: "Side effects are rare but may include cloudy urine",
//         donottake: "if you have ever had alcoholic liver disease (cirrhosis)\
//         or if you drink more than 3 alcoholic beverages per day.   Your doctor\
//         will determine whether acetaminophen is safe for you to use during pregnancy."
//     };
    
//     dict["Dextromethorphan"] = {
//         name:"Dextromethorphan",
//         alts: "Robitussin",
//         uses:"Cough Suppressant.",
//         side_effects: "Blurred vision,confusion, difficulty in urination, drowsiness or dizziness",
//         donottake: "have used an MAO inhibitor such as isocarboxazid (Marplan),\
//         phenelzine (Nardil), rasagiline (Azilect), selegiline (Eldepryl, Emsam),\
//         tranylcypromine (Parnate), or methylene blue injection within the past 14 days."
//     };
    
//     return (dict[drugs[itemname]]);
// }

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 5,
    },
    title: {
        alignSelf: 'center',
        color: '#009ACD',
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
        marginBottom: 20,
        marginTop: 10,
    },
    OutputSubtitlecontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
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
  
    Welcome: {
        screen: WelcomeScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Camera: {
      screen: CameraScreen,
    },
    Output: {
        screen: OutputScreen,
      },
    ManualInput: {
        screen: ManualInput,
    },
  });
  
export default createAppContainer(AppNavigator);