import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from "react-native"

function Card({item, completed, deleted}) {
    const checked = ()=>{
        completed(item.id);
    }
    const deleteThis = ()=>{
        deleted(item.id);
    }

    const done = item.done? [styles.text, styles.strike] :styles.text ;

  return (
    <View style={[styles.cardbody, styles.shadow]}>
        <View style= {styles.checkbox} >
            <Button onPress={checked} title="O"></Button>
        </View>

       <Text style = {done}>{item.task}</Text> 
       
       <View style= {styles.deleted} >
            <Button onPress={deleteThis} title="X"></Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardbody:{
        flexDirection: "row",
        backgroundColor: "#fafafa",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },

    text:{
        fontWeight: "400",
        Color: "#171717",
        fontSize: 30,
    },

    shadow:{
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    checkbox:{

    },

    strike:{
        textDecorationLine: "line-through",
        color: "#5c5c5c",
    },

    deleted:{
        flex: 1,
        alignItems: 'flex-end',
    }
})

export default Card