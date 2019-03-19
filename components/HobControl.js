import React from 'react';
import PropTypes from 'prop-types';
import { Text, Switch, View, Button } from 'react-native';

export class HobControl extends React.Component {

  constructor(props){
    super(props);
  }

  state = {hobValue : 0}

  render(){

    return(
      <View style={{margin: 20, flexDirection:'row', allignItems:'center', justifyContent:'space-between'}}>
        <Button
          title='-'
          onPress={() => {this.setState({hobValue: this.state.hobValue - 1})}}/>
        <Text style={{fontSize: 25}}>{this.props.hobText}</Text>
        <Text style={{fontSize: 20}}>{this.state.hobValue}</Text>

        <Button
          title='+'
          onPress={() => {this.setState({hobValue: this.state.hobValue + 1})}}/>
      </View>
    );
  }
}
