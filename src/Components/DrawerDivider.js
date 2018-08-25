import React, { Component } from 'react';
import {
  Button,
  Left,
  Right,
  Body,
  Icon,
} from "native-base";
import PropTypes from "prop-types";

const DrawerDivider = props => (
  <ListItem itemDivider>
    <Left />
    <Body>
      <Text>this.props.title</Text>
    </Body>
    <Right>
      <Button transparent onPress={this.props.onPress()}>
        <Icon name="add-circle-outline" />
      </Button>
    </Right>
  </ListItem>
);

export default DrawerDivider;

DrawerDivider.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};