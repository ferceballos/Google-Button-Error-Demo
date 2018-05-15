import React, { Component } from "react";
import { StyleProvider, Root } from "native-base";

import App from "../App";
import getTheme from "../../native-base-theme/components";
import commonColor from "../../native-base-theme/variables/commonColor";

/* Aquí se exporta nuestro tema */
class Setup extends Component {
  render() {
    return (
      <Root>
        <StyleProvider style={getTheme(commonColor)}>
          <App />
        </StyleProvider>
      </Root>
    );
  }
}

export default Setup;
