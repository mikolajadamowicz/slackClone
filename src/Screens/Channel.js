import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import {
  Container,
} from "native-base";

import AppHeader from "../Components/AppHeader";
import SlackChat from "./SlackChat";

export default class Channel extends Component {

  render() {
    const { state } = this.props.navigation;
    return <Container>
        <AppHeader title={state.title} {...this.props} />
        <View style={styles.container}>
          <SlackChat />
        </View>
      </Container>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});