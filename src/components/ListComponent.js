import React from 'react';
import { FlatList, View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Dimensions  } from 'react-native';
import Card from "./Card";


const ListComponent = ({status, arr, completed, deleted}) => {

    let windowHeight = Dimensions.get('window').height - 326;
    console.log(windowHeight);
    let arrLen = arr.length;
    console.log("List Components -- ", arr)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
       style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        {arr && <FlatList
        style = {{maxHeight: windowHeight, overflow: true}}
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
    },

  })

export default ListComponent;