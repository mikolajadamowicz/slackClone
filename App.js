import React from 'react';
import { Provider } from "react-redux";

import store from './src/Rematch/index'
import DrawerStack from "./src/Routes/routes";

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
        <DrawerStack />
      </Provider>;
  }
}
