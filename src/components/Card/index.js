// Third Party Imports ---
import React from "react";
import { View, Text } from "react-native";
import IconF from "react-native-vector-icons/Feather";


// Importing styles ---
import styles from "./styles";

function Card({ item, completed, deleted }) {
  // --- When checkbox icon is clicked ---
  const checked = () => {
    completed(item.id);
  };

  // --- When Delete icon is clicked ---
  const deleteThis = () => {
    deleted(item.id);
  };

  // ---- When done - strikethrough, not done -- simple text -----
  const done = item.done ? [styles.text, styles.strike] : styles.text;

  // ----- When Checkbox is clicked and un-clicked  ------
  const check = item.done ? "check-square" : "square";

  return (
    <View style={[styles.cardbody, styles.shadow]}>
      <View style={styles.checkbox}>
        <IconF onPress={checked} name={check} size={25} color="#1f1f1f" />
      </View>

      <Text style={done}>{item.task}</Text>

      <View style={styles.deleted}>
        <IconF
          onPress={deleteThis}
          name="x-circle"
          size={25}
          color="##1f1f1f"
        />
      </View>
    </View>
  );
}

export default Card;
