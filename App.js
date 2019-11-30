import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StartUpScreen } from './StartUpScreen';
import { SetupScreen } from './SetupScreen';
import { DashboardScreen } from './DashboardScreen';
import { GraphScreen } from './GraphScreen';

const RootStack = createStackNavigator(
  {
    Start: StartUpScreen,
    Setup: SetupScreen,
    Dash: DashboardScreen,
    Graph: GraphScreen
  },
  {
    initialRouteName: 'Start',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}