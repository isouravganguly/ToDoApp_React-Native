import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


function InputComponent({addTask}) {

  const [text, onChangeText] = useState();

  const addtodo = () => {
    addTask(text);
}

  return (
    <KeyboardAvoidingView>
    <View style={styles.container}>
        <TextInput
        style= {[styles.inputbox, styles.shadow]}
        onChangeText = {onChangeText}
        value= {text}>
        </TextInput>


      <View style={[styles.addbutton, styles.shadow]}>
      
            <Icon onPress={addtodo} name="plus" size={25} color="#1c1c1c" />

          </View>
    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
    justifyContent: 'space-around',
    marginBottom: 50,

  },
  inputbox:{
    backgroundColor: "#fafafa",
    width: "70%",
    borderRadius: 10,
    height: 60,
    padding: 10,
    fontSize: 25,

  },

  addbutton:{
    backgroundColor: "#fafafa",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon:{
    fontSize: 30,
    fontWeight: "500",
  },

  shadow:{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})

export default InputComponent