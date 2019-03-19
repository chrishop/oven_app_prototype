
import React from 'react';
import PropTypes from 'prop-types';
import { Text, Switch, View } from 'react-native';

export class OvenSlider extends React.Component {
  static propTypes = {
    switchText: PropTypes.any,
    switchValue: PropTypes.any,
    onSwitchValueChange: PropTypes.any
  };

  constructor(props){
    super(props);
  }

  render(){
    const {switchText, switchValue, switchValueChange} = this.props;

    return(
      <View style={{marginLeft: 20, marginRight: 20, marginBottom:10, flexDirection:'row', allignItems:'center', justifyContent:'space-between'}}>
        <Text style={{fontSize: 30}}>{this.props.switchText}</Text>
        <Switch value={this.props.switchValue} onValueChange={this.props.onSwitchValueChange}/>
      </View>
    );
  }
}
