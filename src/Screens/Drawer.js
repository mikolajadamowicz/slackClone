import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { NavigationActions, SafeAreaView, StackActions } from "react-navigation";
import { List, Container, Content } from "native-base";
import { connect } from 'react-redux'

import DrawerDivider from '../Components/DrawerDivider';
import ItemList from "../Components/ItemList";

class Drawer extends Component {
  _navigateToScreen = (params) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "Channel",
    });
    const resetAction = StackActions.reset({
      index:0,
      actions: [navigateAction]
    })
    this.props.navigation.dispatch(resetAction);
  };

  render() {
   const { props } = this;
    return <Container>
      <SafeAreaView style={styles.safeArea} forceInset={{ top: "always", horizontal: "never" }}>
          <Content style={styles.content}>
            <List>
              <DrawerDivider title="CHANNELS" />
            <ItemList items={props.channels} navigate={(title) => this.props.navigation.setParams({ title })} />
              <DrawerDivider title="DIRECT MESSAGES" />
              <ItemList items={["mike", "justin"]} />
            </List>
          </Content>
        </SafeAreaView>
      </Container>;
  }
}

Drawer.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  content: {
    backgroundColor: "#5c3a58"
  },
});

const mapState = (state) => ({
  channels: state.channels
});

const mapDispatch = dispatch => ({
  addChannel: () => dispatch.channels.addChannel()
});

export default connect(mapState, mapDispatch)(Drawer);


