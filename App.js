import React, {useEffect, useState} from "react";
import { FlatList, View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, button } from "react-native";
import ListComponent from "./components/ListComponent";
import InputComponent from "./components/InputComponent"
import Header from "./components/Header";
import uuid from 'react-native-uuid';

const App = ()=>{

  const [arr, setArr] = useState([{id:1, done: false, task:"hello"}, {id:2, done: true, task:"hello World"}, {id:3, done: true, task:"Sourav"}]);
  const [status, setStatus] = useState(0);

  let sendArr = arr;

    //  -------------------------------- Status of Display ------------------------------
      // ================== 0 - All, 1- Completed , 2 - Active --------
  useEffect(()=>{
    switch(status) {
      case 0:
        sendArr= arr;
        break;
      case 1:
        console.log(a.done);
        sendArr = arr?.filter(a => a.done === true)
        break;
        case 2:
          sendArr = arr?.filter(a => a.done === false)
          break;
      default:
        // code block
    }
    
  }, [status])

  //  -------------------------------- Set Status ------------------------------
  const statusType = (now) =>{
    setStatus(now);
  }


  //  -------------------------------- Add Task ------------------------------

  const addTask = (item)=>{
    console.log(typeof item)
    setArr ((pretodo) =>{
      return [
        {
          id: uuid.v1(),
          task: item ,
          done: false,
        },
        ...pretodo
      ]
    })
  }

      //  -------------------------------- Task Completed? ------------------------------
      const completed = (id) => {
         arr.find((a)=>(a.id === id) && (a.done = true))
         setArr((list) => [...arr])
      }

        //  -------------------------------- Task Deleted? ------------------------------
        const deleted = (id) => {
          clicked = arr.find((a, index)=> a.id === id && arr.splice(index,1));
          setArr((list) => [...arr])
       }
 

    //  -------------------------------- return JSX final component ------------------------------

    console.log(status);
    console.log(sendArr);
  return (
    <View style={styles.screen}>
      <Header statusType = {statusType}/>
     
     <View style={styles.body}>

      <ListComponent deleted = {deleted} completed={completed} arr = {sendArr}/>
      <InputComponent addTask = {addTask}/>

     </View>
    </View>
  )
  }

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor: "#e8e6e1",
  },

  body:{
    flex: 2,
    justifyContent: "space-between",
  },
})


export default App;