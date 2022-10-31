// Third Party Imports
import React from "react";
import { View, Text, Pressable } from "react-native";

// Importing styles ---
import styles from "./styles";

function Filter({ filterType }) {
  return (
    <View style={styles.headSection}>

      {/* ---------- Choose from filter buttons: All, Completed and Active  ----------------- */}

    {/* --- ALL --- */}
      <View style={styles.filterButtons}>
        <View style={[styles.button, styles.shadow, styles.All]}>
          <Pressable onPress={() => filterType(0)}>
            <Text style={styles.buttonText}>All</Text>
          </Pressable>
        </View> 

    {/* --- COMPLETED --- */}
        <View style={[styles.button, styles.shadow, styles.completed]}>
          <Pressable onPress={() => filterType(1)}>
            <Text style={styles.buttonText}>Completed</Text>
          </Pressable>
        </View>

    {/* --- ACTIVE --- */}
        <View style={[styles.button, styles.shadow, styles.active]}>
          <Pressable onPress={() => filterType(2)}>
            <Text style={styles.buttonText}>Active</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Filter;
