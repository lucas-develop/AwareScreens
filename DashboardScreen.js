import React, { Component } from 'react';
import { Text, View, Button, Dimensions } from 'react-native';
import {LineChart} from 'react-native-chart-kit'

export class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  uploadData () {
    alert("Issue connecting to a network.")
    console.log("Attempted to upload data")
  }

  static navigationOptions = {
    title: 'Dashboard',
  };
  
  render() {
    const dataLine = {
      labels: ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
      datasets: [
        {
          data: [40, 45, 30, 80, 85, 60, 55],
          strokeWidth: 3, // optional
        },
      ],
    };

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <Text>Info:            Currently Disconnected</Text>
          <Text>Timestamp:       6:36 pm</Text>
          <Text>SPL:             45</Text>
          <Text>Pitch:           105 Hz</Text>
          <Text>Average Pitch:   130 Hz</Text>
          <Text>Min Pitch:       90  Hz</Text>
          <Text>Max Pitch:       200 Hz</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center'}}>
          <LineChart
            data={dataLine}
            width={Dimensions.get('window').width} // from react-native
            height={300}
            yAxisLabel={''}
            xAxisLabel={''}
            chartConfig={{
                backgroundColor: '#rgb(255,255,255)',
                backgroundGradientFrom: 'rgb(0, 51, 160)',
                backgroundGradientTo: 'rgb(0, 40, 100)',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
            />
        </View>

        <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
          <Button
              title="Access Graph History"
              color="rgb(0, 51, 160)"
              onPress={() => this.props.navigation.navigate('Graph')}
            />
          <Button
              title="Device Setup"
              color="rgb(176, 198, 217)"
              onPress={() => this.props.navigation.navigate('Setup')}
            />
          <Button
              title="Upload Data"
              color="rgb(200, 200, 200)"
              onPress={this.uploadData}
            />
        </View>     
      </View>
    );
  }
}