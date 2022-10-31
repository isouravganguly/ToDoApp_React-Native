// Third Party Imports
import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Importing styles ---
import styles from "./styles";

function InputComponent({ addTask }) {
  const [text, onChangeText] = useState("");

  // On touch + in UI,  or press 'Enter'
  const addtodo = () => addTask(text);
  const cleanTextBox = () => onChangeText("");

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputbox, styles.shadow]}
        onChangeText={onChangeText}
        value={text}
        autoCorrect={false}
        onSubmitEditing={() => {
          addtodo();
          cleanTextBox(); //Clear 'text' in input-box after user is done...
        }}></TextInput>

      {/* Plus Icon to add Task */}
      <View style={[styles.addbutton, styles.shadow]}>
        <Icon onPress={addtodo} name="plus" size={25} color="#1c1c1c" />
      </View>
    </View>
  );
}

export default InputComponent;
