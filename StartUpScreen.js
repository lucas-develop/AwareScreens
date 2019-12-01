import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

export class StartUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onPressButton () {
    alert("No account detected. Setup your profile to proceed!")
    console.log("Pressed Login Button")
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image source={require("./assets/logo_white.png")} style={{width: 280, height: 210}}/>
          <Text style={{fontSize: 20}}>Welcome to VoiceAware!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            color="rgb(0, 51, 160)"
            onPress={this.onPressButton}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Setup"
            color="rgb(176, 198, 217)"          
            onPress={() => this.props.navigation.navigate('Setup')}
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