import React, {useEffect, useState} from "react";
import { FlatList, View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, button } from "react-native";
import ListComponent from "./src/components/ListComponent";
import InputComponent from "./src/components/InputComponent"
import Header from "./src/components/Header";
import uuid from 'react-native-uuid';

const App = ()=>{

  const [arr, setArr] = useState([{id:1, done: false, task:"hello"}, {id:2, done: true, task:"hello World"}, {id:3, done: true, task:"Sourav"}]);
  const [status, setStatus] = useState(0);
  // const [sendArr, setSendArr] = useState(arr);
   var sendArr = arr;

    //  -------------------------------- Status of Display ------------------------------
      // ================== 0 - App, 1- Completed , 2 - Active --------
  useEffect(()=>{
    console.log("hello status" , status)
    switch(status) {
      case 0:
        sendArr = arr;
        // setSendArr((list)=> [...arr]);
        break;
      case 1:
        A = arr?.filter(a => a.done === true)
        console.log("status", A);
        // setSendArr((list)=> [...A]);
        sendArr = A;
        break;
        case 2:
          A = arr?.filter(a => a.done === false)
          // setSendArr((list)=> [...A]);
          sendArr = A
          break;
      default:
        // code block
    }
    
  }, [status])

  console.log("outside useeffect ", sendArr)

  //  -------------------------------- Set Status ------------------------------
  const statusType = (now) =>{
    setStatus(now);
  }


  //  -------------------------------- Add Task ------------------------------

  const addTask = (item)=>{
    console.log(item);
    setArr ((pretodo) =>{
      return [
        {
          id: uuid.v1(),
          task: item ,
          done: false,
        },
        ...pretodo
      ]
    });
    // setSendArr((list)=> [...arr]);
    sendArr = arr;
  }

      //  -------------------------------- Task Completed? ------------------------------
      const completed = (id) => {
         arr.find((a)=>(a.id === id) && (a.done = !a.done))
         setArr((list) => [...arr]);
        //  setSendArr((list)=> [...arr]);

         sendArr = arr;
      }

        //  -------------------------------- Task Deleted? ------------------------------
        const deleted = (id) => {
           arr.find((a, index)=> a.id === id && arr.splice(index,1));
    
           setArr((list)=>[...arr])
          //  setSendArr((list)=> [...arr]);
           sendArr = arr
       }
 

    //  -------------------------------- return JSX final component ------------------------------

  return (
    <View style={styles.screen}>
      <Header statusType = {statusType}/>
     
     <View style={styles.body}>

      <ListComponent status = {status} deleted = {deleted} completed={completed} arr = {sendArr}/>
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