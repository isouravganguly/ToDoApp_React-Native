import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

function Header({statusType}) {
  return (
    <View style={styles.headSection}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={styles.header}>My Todo List</Text>
      </TouchableWithoutFeedback>

      {/* ---------- Choose from Status buttons: All, Completed and Active  ----------------- */}

      <View style={styles.statusButtons}>
        <View style={[styles.button, styles.shadow, styles.All]}>
          <Pressable onPress={() => statusType(0)}>
            <Text style={styles.buttonText}>All</Text>
          </Pressable>
        </View>

        <View style={[styles.button, styles.shadow, styles.completed]}>
          <Pressable onPress={() => statusType(1)}>
            <Text style={styles.buttonText}>Completed</Text>
          </Pressable>
        </View>

        <View style={[styles.button, styles.shadow, styles.active]}>
          <Pressable onPress={() => statusType(2)}>
            <Text style={styles.buttonText}>Active</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#1a1a1a',
    fontWeight: '600',
    padding: 20,
    fontSize: 30,
  },

  headSection: {
    marginTop: 40,
  },

  statusButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  button: {
    backgroundColor: '#fafafa',
    minWidth: 100,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
  },

  shadow: {
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
  },
  completed: {
    shadowColor: '#4dff70',
  },
  active: {
    shadowColor: '#0388fc',
  },
  All: {
    shadowColor: '#fcdb03',
  },
});

export default Header;
