import React from 'react';
import PropTypes from 'prop-types';
import { Text, Switch, View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'


export class OvenTimer extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     timerStart: false,
     totalDuration: 90000,
     timerReset: false,
   };
   this.toggleTimer = this.toggleTimer.bind(this);
   this.resetTimer = this.resetTimer.bind(this);
 }

 toggleTimer() {
   this.setState({timerStart: !this.state.timerStart, timerReset: false});
 }

 resetTimer() {
   this.setState({timerStart: false, timerReset: true});
 }

 getFormattedTime(time) {
     this.currentTime = time;
 };

 render() {
   return (
     <View style={{marginTop: 60,marginLeft: 20, marginRight: 20, marginBottom:10, flexDirection:'row', allignItems:'center', justifyContent:'space-between'}}>
       <TouchableHighlight onPress={this.toggleTimer}>
         <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
       </TouchableHighlight>
       <TouchableHighlight onPress={this.resetTimer}>
         <Text style={{fontSize: 30}}>Reset</Text>
       </TouchableHighlight>
       <Timer totalDuration={this.state.totalDuration} msecs={false} start={this.state.timerStart}
         options={options}
         reset={this.state.timerReset}
         handleFinish={() => alert("Timer Finished")}
         getTime={this.getFormattedTime} />

     </View>
   );
 }
}

const options = {
  container: {
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 30,
    color: '#000',
    marginLeft: 7,
  }
};

const handleTimerComplete = () => alert("custom completion function");
