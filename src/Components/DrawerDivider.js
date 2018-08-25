import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import {
  Separator,
  Button,
  Left,
  Right,
  Body,
  Icon,
  ListItem,
  Text
} from "native-base";
import PropTypes from "prop-types";

const DrawerDivider = props => (
  <View style={styles.container}>
    <Left>
      <Text style={styles.text}>{props.title}</Text>
    </Left>
    <Right>
      <Button transparent>
        <Icon style={styles.icon} name="add-circle" />
      </Button>
    </Right>
  </View>
);

export default DrawerDivider;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  text: {
    fontSize: 11,
    marginLeft: 10,
    color: "grey"
  },
  icon: {
    color: "grey"
  }
});

DrawerDivider.propTypes = {
  title: PropTypes.string,
  // onPress: PropTypes.func,
};