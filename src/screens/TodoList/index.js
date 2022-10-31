// Import Third Party Components ==
import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import uuid from "react-native-uuid";

// Import user-defined Components ==
import ListComponent from "../../components/List/index";
import InputComponent from "../../components/Input/index";
import Filter from "../../components/Filters/index";

// Import styles
import styles from "./styles";

const TodoList = () => {
  // add: use async storage instead of arr local storage
  const [arr, setArr] = useState([
    { id: 1, done: false, task: "hello" },
    { id: 2, done: true, task: "hello World" },
    { id: 3, done: true, task: "Sourav" },
  ]);
  const [filter, setFilter] = useState(0);
  const prevfilter = useRef();

  //  -------------------------------- Set filter ----------------------------
  const filterType = (now) => {
    prevfilter.current = filter;
    setFilter(now);
  };

  //  -------------------------------- Add Task ------------------------------

  // add: Async storage --
  const addTask = (item) => {
    setArr((pretodo) => {
      return [
        {
          id: uuid.v1(),
          task: item,
          done: false,
        },
        ...pretodo,
      ];
    });
  };

  //  -------------------------------- Task Completed? ------------------------------
  const completed = (id) => {
    arr.find((a) => a.id === id && (a.done = !a.done));
    setArr((list) => [...arr]);   // -reset array
  };

  //  -------------------------------- Task Deleted? ------------------------------
  const deleted = (id) => {
    arr.find((a, index) => a.id === id && arr.splice(index, 1));
    setArr((list) => [...arr]);   // -reset array
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
