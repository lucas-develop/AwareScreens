import React, { Component } from 'react';
import { Text, TextInput, View, Image, Button, StyleSheet } from 'react-native';

export default class StartUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onPressButton () {
    alert("You tapped the button")
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image source={require("./assets/logo_white.png")} style={{width: 180, height: 110}}/>
          
          {/* <TextInput
            style={{height: 40}}
            placeholder="Enter Your Full Name"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          /> */}
          <Text>Welcome to VoiceAware!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onPressButton}
            title="Login"
            color="rgb(0, 51, 160)"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onPressButton}
            title="Setup"
            color="rgb(176, 198, 217)"
          />
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});