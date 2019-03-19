import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  Slider,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { OvenSlider } from '../components/OvenSlider';
import { OvenTimer } from '../components/OvenTimer';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Oven Control',
  };

  state = {sliderValue: 180, switchState: false}

  static navigationOptions = {
    header: null,
  };

  render() {
    const {sliderValue,
      switchStateOne,
      switchStateTwo,
      switchStateThree,
      switchStateFour,
      switchStateFive} = this.state

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Oven Controls</Text>
            <Text style={styles.subtitle}>Temperature (°C)</Text>
            <Slider
              step={10}
              minimumValue={60}
              maximumValue={300}
              value={this.state.sliderValue}
              onValueChange={sliderValue => this.setState({sliderValue})}
            />
            <Text style={styles.normalText}>{this.state.sliderValue}</Text>
            <OvenSlider
              switchText= 'Off/On'
              switchValue= {this.state.switchStateOne}
              onSwitchValueChange={(switchStateOne) => this.setState({switchStateOne})}
            />
            <OvenSlider
              switchText= 'Top Element'
              switchValue= {this.state.switchStateTwo}
              onSwitchValueChange={(switchStateTwo) => this.setState({switchStateTwo})}
            />
            <OvenSlider
              switchText= 'Bottom Element'
              switchValue= {this.state.switchStateThree}
              onSwitchValueChange={(switchStateThree) => this.setState({switchStateThree})}
            />
            <OvenSlider
              switchText= 'Fan'
              switchValue= {this.state.switchStateFour}
              onSwitchValueChange={(switchStateFour) => this.setState({switchStateFour})}
            />
            <OvenSlider
              switchText= 'Grill'
              switchValue= {this.state.switchStateFive}
              onSwitchValueChange={(switchStateFive) => this.setState({switchStateFive})}
            />

            <OvenTimer />



        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  normalText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 5,
    marginBottom:20
  },
  ovenButton: {
    marginLeft: 30,
    marginRight: 30
  }
})
