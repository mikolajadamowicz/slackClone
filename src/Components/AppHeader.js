import React, { Component } from 'react';
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from "native-base";
import PropTypes from "prop-types";

const AppHeader = (props) => (
        <Header>
          <Left>
          <Button transparent onPress={() => navigation.toggleDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title># {this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
      );

export default AppHeader;

AppHeader.propTypes = {
  title: PropTypes.string
};
