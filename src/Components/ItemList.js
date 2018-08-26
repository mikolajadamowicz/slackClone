import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "native-base";

export default ItemList = (props) => {
  const items = props.items;
  const listItems = items.map((item, i) => (
    <Button
      key={i}
      transparent
      onPress={() => props.navigate(item)}
      style={styles.button}
    >
      <Text style={styles.hash}># </Text>
      <Text style={styles.text}>{item}</Text>
    </Button>
  ));
  return listItems;
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 14
  },
  hash: {
    color: "grey",
    fontSize: 18
  },
  button: {
    marginLeft: 10
  }
});