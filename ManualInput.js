import React, {Component} from "react";
import {StyleSheet, 
        View, 
        SafeAreaView, 
        Text, 
        Button,
        Alert
        } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import shortid from "shortid";
import {Autocomplete, withKeyboardAwareScrollView} from "react-native-dropdown-autocomplete";

import { dictionary } from './dictionary';
// import data from "./data";

const data = [
    "Tylenol",
    "Ibuprofen",
    "Acetaminophen",
    "Advil",
    "Robitussin",
    "Dextromethorphan",
    
  ];
 
class ManualInput extends React.Component {
  handleSelectItem(item, index) {
    const {onDropdownClose} = this.props;
    onDropdownClose();
    console.log('item: ', item);
    this.item = item;
    this.iteminfo = dictionary(item);
    // console.log(this.iteminfo.name);
    // console.log(this.iteminfo.uses);
    // console.log(this.iteminfo.side_effects);

  }
 
  render() {
    const autocompletes = [...Array(1).keys()];
 
    const {scrollToInput, onDropdownClose, onDropdownShow} = this.props;
 
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
            Enter drug name here
        </Text>
        
          <View style={styles.autocompletesContainer}>
            <SafeAreaView>
              {autocompletes.map(() => (
                <Autocomplete
                  autoCorrect={false}
                  initialValue={""}
                  key={shortid.generate()}
                  style={styles.input}
                  scrollToInput={ev => scrollToInput(ev)}
                  handleSelectItem={(item, id) => this.handleSelectItem(item, id)}
                  onDropdownClose={() => onDropdownClose()}
                  onDropdownShow={() => onDropdownShow()}
                  
                  highlightText
                  data={data}
                  valueExtractor={item => item}
                  centerContent
                  rightTextExtractor={item => item.properties}
                />
              ))}
            </SafeAreaView>
            <Button 
            style={styles.buttonContainer}
            title='Submit'
            onPress={() => {
                console.log(this.item)
                console.log(this.iteminfo)
                if(this.item != undefined){
                    this.props.navigation.navigate('Output', {
                      itemId: this.item,
                      itemData: this.iteminfo,
                    });
                }
                else{
                    Alert.alert(
                        '',
                        'Invalid input. Please check your spelling and choose from dropdown menu.',
                        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                      {cancelable: false},
                )
                }
              }}       
            >
            </Button>
            <Text style={{ alignSelf: 'center', fontSize: 12}}>
            (Try acetaminophen, Tylenol or ibuprofen)
            </Text>
          </View>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  autocompletesContainer: {
    paddingTop: 0,
    zIndex: 1,
    width: "100%",
    paddingHorizontal: 8,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  input: {maxHeight: 40},
  inputContainer: {
    display: "flex",
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#009ACD",
    paddingVertical: 13,
    paddingLeft: 12,
    paddingRight: "5%",
    width: "100%",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  plus: {
    position: "absolute",
    left: 15,
    top: 10,
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
});
 
export default withKeyboardAwareScrollView(ManualInput);