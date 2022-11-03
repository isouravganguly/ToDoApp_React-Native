// Import Third Party Components ==
import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import user-defined Components ==
import ListComponent from "../../components/List/index";
import InputComponent from "../../components/Input/index";
import Filter from "../../components/Filters/index";

// Import styles
import styles from "./styles";

const TodoList = () => {
  // add: use async storage instead of arr local storage
  const [arr, setArr] = useState([]);
  const [filter, setFilter] = useState(0);
  const prevfilter = useRef();
  
  const getAllData = async()=> {
    value = await AsyncStorage.getItem("arr");
    if(value === null)
      return null;
    else{
      value = JSON.parse(value);
      return value;
    }}
  
  useEffect(()=>{
    getAllData().then(async(data)=>{
      if(data === null)
        {
          await AsyncStorage.setItem("arr", "")
      }
      else{
        setArr(...arr, data);
      }
    })
  }, [])

  // AsyncStorage.clear();
  //  -------------------------------- Set filter ----------------------------
  const filterType = (now) => {
    prevfilter.current = filter;
    setFilter(now);
  };

  //  -------------------------------- Add Task ------------------------------

  // add: Async storage --
  const addTask = async (item) => {
  let asyncArr = [...arr];
    if (asyncArr === null) {
      let newArr = 
        {
          id: uuid.v1(),
          task: item,
          done: false,
        }

      try {
        await AsyncStorage.setItem("arr", JSON.stringify([...newArr]));
        setArr(newArr);
      } catch (error) {
        console.log("error while async empty", error);
      }
    } else {
      newArr =[ 
        {
          id: uuid.v1(),
          task: item,
          done: false,
        },
        ...asyncArr,]

      try {
        await AsyncStorage.setItem("arr", JSON.stringify(newArr));
        setArr(newArr);
      } catch (error) {
        console.log("error while async has data", error);
      }

    }
  };

  //  -------------------------------- Task Completed? ------------------------------
  const completed = (id) => {

    cloneArr = [...arr];
    cloneArr.find((a) => a.id === id && (a.done = !a.done));
    console.log("clone arr ",cloneArr);

    try {
      AsyncStorage.setItem("arr", JSON.stringify(cloneArr))
      setArr((list) => [...cloneArr]); // -reset array
    } catch (error) {
      console.log("error on checkBox - completed()", error)
    }

  };

  //  -------------------------------- Task Deleted? ------------------------------
  const deleted = (id) => {

    cloneArr = [...arr];
    console.log("cloneArr", cloneArr)
    cloneArr.find((a, index) => a.id === id && cloneArr.splice(index, 1));

    try {
      AsyncStorage.setItem("arr", JSON.stringify(cloneArr))
      setArr((list) => [...cloneArr]); // -reset array
    } catch (error) {
      console.log("error on checkBox - completed()", error)
    }
    };

  //  -------------------------------- return JSX final component ------------------------------

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.header_text}>The Todo List</Text>
      </View>

      <Filter filterType={filterType} />

      <View style={styles.body}>
        <ListComponent
          prevfilter={prevfilter}
          filter={filter}
          deleted={deleted}
          completed={completed}
          arr={arr}
        />
        <InputComponent addTask={addTask} />
      </View>
    </View>
  );
};

export default TodoList;
