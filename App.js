import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '' 
    };
  }

  speak() {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
    console.log(thingToSay)
  }

  render() {
    return (
      <View style = {styles.container}>
        <Header
            backgroundColor={'#56A3BF'}
            centerComponent={{
              text: 'Text to Speech',
              style: { color: '#fff', fontSize: 28 },
            }}
          />

      
          
        <TextInput
            style = {styles.inputBox}
            onChangeText={text => {
              this.setState({ text: text });
            }}
            value={this.state.text}
            defaultValue = {"The"}
          
          />

        <TouchableOpacity style = {styles.speechButton}
        onPress = {() => {
          this.state.text === '' || this.state.text == ' '
          ? alert("Type a Word")
        
          : (this.state.text.indexOf('@') !== -1
          || this.state.text.indexOf('#') !== -1
          || this.state.text.indexOf('$') !== -1
          || this.state.text.indexOf('%') !== -1
          || this.state.text.indexOf('^') !== -1
          || this.state.text.indexOf('&') !== -1
          || this.state.text.indexOf('*') !== -1
          || this.state.text.indexOf('(') !== -1
          || this.state.text.indexOf(')') !== -1
          || this.state.text.indexOf('<') !== -1
          || this.state.text.indexOf('>') !== -1
          || this.state.text.indexOf('~') !== -1
          || this.state.text.indexOf('`') !== -1
          || this.state.text.indexOf('[') !== -1
          || this.state.text.indexOf(']') !== -1
          || this.state.text.indexOf(';') !== -1
          || this.state.text.indexOf('{') !== -1
          || this.state.text.indexOf('}') !== -1
          //escape character for forward slash
          || this.state.text.indexOf('\\') !== -1
          || this.state.text.indexOf('|') !== -1
          || this.state.text.indexOf('_') !== -1
          || this.state.text.indexOf('£') !== -1
          || this.state.text.indexOf('₹') !== -1
          || this.state.text.indexOf('¥') !== -1
          || this.state.text.indexOf('€') !== -1
          ? alert("Please avoid using special characters.")
          : this.speak())
        }}>
          <Text style = {styles.displayText}>Press to hear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontSize: 20,
    borderColor: 'black',
    color: 'black',
    borderRadius: 0
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    
  },
  speechButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: '#2E5866',
    
  },

});
