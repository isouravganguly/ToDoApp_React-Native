import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

  // headSection: {
  //   marginTop: 40,
  // },

  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  button: {
    backgroundColor: "#fafafa",
    minWidth: 100,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
  },

  shadow: {
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  buttonText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
    padding: 10,
  },
  completed: {
    shadowColor: "#4dff70",
  },
  active: {
    shadowColor: "#0388fc",
  },
  All: {
    shadowColor: "#fcdb03",
  },
});

export default styles;
