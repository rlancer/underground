import React from "react";
import {StyleSheet, Text, View, FlatList, StatusBar} from "react-native";
import {NativeRouter, Route, Link, AndroidBackButton} from 'react-router-native'
import Placelist from './src/Placelist';
import {MapView} from 'expo';

export default class App extends React.Component {


  render() {
    return (
      <NativeRouter>
        <AndroidBackButton>
          <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content"/>
            <Route style={{backgroundColor: 'green', flex: 1}} exact path="/" component={Placelist}/>
             <Route exact path="/place/:id" component={Item}/>
          </View>
        </AndroidBackButton>
      </NativeRouter>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    flex: 1,
    backgroundColor: '#ff0'
  },
});

class Item extends React.Component {

  render() {
    return <View style={{padding: 10}}><Text>Hello item! {this.props.match.params.id}</Text>

      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 3.78825,
          longitude: 122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

    </View>
  }
}
