import React, {useState} from 'react';
import { FlatList, View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Dimensions  } from 'react-native';
import Card from "./Card";


const ListComponent = ({prevStatus, status, arr, completed, deleted}) => {

  // --------------"theArr" is the rendering array each Time, "arr" is the real array ------
  var theArr = arr;
  console.log(theArr);

  //  ------------Checking for status -- All, Completed, or Active -------
  if(prevStatus.current !== status){
    if(status === 2) // ===ACTIVE
    {
      theArr = arr.filter((a)=>a.done === false)
  }
  else if(status === 1){ // ===COMPLETED
    theArr = arr.filter((a)=>a.done === true)
  }
  else{
    theArr = arr; //  ===ALL (&&other values)
  }
  }

    let windowHeight = Dimensions.get('window').height - 326;
    // --------- See the height of the screen  ------
    // console.log(windowHeight);  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
       style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        {arr && <FlatList
        style = {{maxHeight: windowHeight, overflow: true}}
          data = {theArr}  // rendering value
          renderItem = {({item})=> <Card deleted = {deleted} completed = {completed} item={item}/>}
          extraData = {theArr} // when this changes, List rerenders
          keyExtractor={item => item.id}  //  --- Each Item has a Unique ID ---

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