import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import { List, Container, Content } from "native-base";

import DrawerDivider from '../Components/DrawerDivider';
import ItemList from "../Components/ItemList";

class Drawer extends Component {
  _navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  _addItem = (array,item) => {

  }

  render() {
    return <Container>
      <SafeAreaView style={styles.safeArea} forceInset={{ top: "always", horizontal: "never" }}>
          <Content style={styles.content}>
            <List>
              <DrawerDivider title="CHANNELS" />
              <ItemList items={["mike", "justin"]} onPress={this._navigateToScreen("Channel")} />
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



export default Drawer;


