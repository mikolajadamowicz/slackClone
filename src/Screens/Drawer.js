import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions, SafeAreaView } from "react-navigation";
import { Text, Button, List, ListItem } from 'native-base'

import DrawerDivider from '../Components/DrawerDivider';

class Drawer extends Component {
  _navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  _renderItems = (items) => {
    items.map((item, i) => {
    return(
        <ListItem key={i}>
          <Button transparent onPress={this._navigateToScreen("Channel")}>
            <Text># {item}</Text>
          </Button>
        </ListItem>
        );
        });
  }

  _addItem = (array,item) => {

  }

  render() {
    return <Container>
        <SafeAreaView style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
          <Content>
            <List>
              <DrawerDivider title='CHANNELS'/>
              {this._renderItems(['mike', 'justin'])}
              <DrawerDivider title='DIRECT MESSAGES' />
              {this._renderItems(['mike','justin'])}
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
  container: {
    flex: 1
  }
});

export default Drawer;


