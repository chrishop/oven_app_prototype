import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { HobControl } from '../components/HobControl';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Hob Control',
  };

  render() {
    return (
        <View style={styles.container} >
            <HobControl hobText="Hob One"/>
            <HobControl hobText="Hob Two"/>
            <HobControl hobText="Hob Three"/>
            <HobControl hobText="Hob Four"/>
        </View>
    )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
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
