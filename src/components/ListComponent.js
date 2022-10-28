import React from 'react';
import { FlatList, View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import Card from "./Card";

const ListComponent = ({status, arr, completed, deleted}) => {

    let arrLen = arr.length;
    console.log("List Components -- ", arr)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
       style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        {arr && <FlatList
        style = {styles.list}
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

    list:{
      maxHeight: 520,
      overflow: true,
    }

  })

export default ListComponent;