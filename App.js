import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  State,
  Alert,
} from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  show = (username, password) => {
    if ((username != '') && (password != '')){
      Alert.alert(
  'Error',
  'Wrong Password or username',
  [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed')
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') }
  ],
  { cancelable: false }
);
    }
    
  };

  render() {
    return (
      <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
        <View
          style={{
            backgroundColor: 'lightblue',
            flex: 0.37,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <Image
            source={{
              uri:
      'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png',
            }}
            style={{ width: 150, height: 150, top: 20 }}></Image>
        </View>
        <View
          style={{
            backgroundColor: 'lightblue',
            flex: 0.4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              width: '80%',
              height: '20%',
              backgroundColor: 'lightgreen',
              margin: '4%',
              borderRadius: 10,
              padding: 15,
            }}
            onChangeText={(text) => this.setState({ username: text })}
            placeholder="Username"></TextInput>
          <TextInput
            style={{
              width: '80%',
              height: '20%',
              backgroundColor: '#F0FFFF',
              borderRadius: 10,
              padding: 15,
            }}
            onChangeText={(text) => this.setState({ password: text })}
            placeholder="Password"
            secureTextEntry></TextInput>
        </View>
        <View
          style={{
            backgroundColor: '33A6CC',
            flex: 0.06,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#F0FFFF',
              borderRadius: 10,
              padding: 10,
              paddingLeft: 15,
            }}>
            <TouchableOpacity
              style={styles.titleText}
              onPress={() => 
              this.show(this.state.username, this.state.password)
              }>
              <Text style={styles.titleText}>Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleText: {
    color: 'lightgreen',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "'lucida grande', tahoma, verdana, arial, sans-serif",
  },
});