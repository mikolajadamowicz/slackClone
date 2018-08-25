import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import {
  Container,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Textarea,
  Form,
  Item,
  Input
} from "native-base";
import { GiftedChat } from "react-native-gifted-chat";

import AppHeader from "../Components/AppHeader";
import SlackChat from "../SlackChat";

export default class Channel extends Component {

  render() {
    return<Container>
          <AppHeader title={"tutaj wrzucic porps z nawigacji"} />          
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