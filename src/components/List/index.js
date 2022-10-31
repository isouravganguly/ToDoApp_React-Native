// So, the reusable components go as/into Components
// display ui goes as/into Screens folder...

// Third party imports
import React from "react";
import {
  View,
  FlatList,
  Dimensions,
  scroll,
} from "react-native";

// Component imports
import Card from "../Card";
import styles from "./styles";

const index = ({ prevfilter, filter, arr, completed, deleted }) => {
  // -- "theArr" is the rendering array each time after filtering, "arr" is the real array --
  let theArr = arr;

  //  ------------Checking for filter -- All, Completed, or Active -------
  if (prevfilter.current !== filter) {
    if (filter === 2) {
      // ===ACTIVE
      theArr = arr.filter((a) => a.done === false);
    } else if (filter === 1) {
      // ===COMPLETED
      theArr = arr.filter((a) => a.done === true);
    } else {
      theArr = arr; //  ===ALL (&&other values)
    }
  }

  let windowHeight = Dimensions.get("window").height - 300;
  // --------- See the height of the screen  ------

  return (
    <View style = {styles.listComponent}>

     { arr && (
        <FlatList
          style={{ maxHeight: windowHeight, overflow: "hidden" }}
          data={theArr} // rendering value
          renderItem={({ item }) => (
            <Card deleted={deleted} completed={completed} item={item} />
          )}
          extraData={theArr} // when this changes, List re-renders
          keyExtractor={(item) => item.id} //  --- Each Item has a Unique ID ---
        />
      )
}
    </View>
  );
};

export default index;
