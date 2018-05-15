import React, { Component } from "react";
import { View, AppRegistry, StyleSheet, TouchableNativeFeedback, Dimensions } from 'react-native';
import { Thumbnail, Text } from 'native-base';

class SplashScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    var timer = setTimeout(function () { navigate('Login'); }, 3500);

    function goHome() {
      clearTimeout(timer)
      navigate('Login');
    }

    var screen = Dimensions.get('screen');

    return (
      <TouchableNativeFeedback style={{ flex: 1 }} onPress={() => goHome()}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }} >
          <View style={{ flex: 1 }} />
          <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}  >
            <Thumbnail resizeMode="contain" style={{ width: screen.width * 0.62, height: screen.height * 0.206 }} square source={require('../../../assets/images/logo.png')} />
          </View>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1 }} >
            <Text style={[styles.white, styles.subTitle]}>Powered by SIABUC</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  white: {
    backgroundColor: 'white',
  },

  small: {
    fontSize: 13,
  },

  bigTitle: {
    fontWeight: 'normal',

    fontSize: 52,
    color: '#263238',
    fontFamily: 'sans-serif-light',
  },

  subTitle: {
    color: '#546e7a',
    fontFamily: 'sans-serif-light',
    fontSize: 14
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }

});
