import React from 'react';
import { FlatList, View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import Card from "./Card";

const ListComponent = ({arr, completed, deleted}) => {

    let arrLen = arr.length;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
       style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        {arr && <FlatList
          data = {arr}
          renderItem = {({item})=> <Card deleted = {deleted} completed = {completed} item={item}/>}
          extraData = {arrLen}
          keyExtractor={(item, index) => 'key'+index}

          />}

      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

  )}

  const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        padding: 10,
        borderRadius: 50,
    },

    text:{
        color: "#080808",
        fontWeight: "400",
    }

  })

export default ListComponent;