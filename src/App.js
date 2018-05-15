import React, { Component } from "react";
import { Icon } from "native-base"
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { footerColors } from "../native-base-theme/variables/commonColor"

import SplashScreen from "./routes/splash/";
import LoginScreen from "./routes/login/";
import SelectionScreen from "./routes/login/selection"

const Root = StackNavigator(
  {
    Splash: { screen: SplashScreen },
    Login: { screen: LoginScreen },
    Selection: { screen: SelectionScreen },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Splash'
  }
);

class App extends Component {
  render() {
    return (<Root />);
  }
}

export default App;
