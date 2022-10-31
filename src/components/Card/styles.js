import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  cardbody: {
    flexDirection: "row",
    backgroundColor: "#fafafa",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  text: {
    flex: 1,
    flexWrap: "wrap",
    fontWeight: "400",
    Color: "#171717",
    fontSize: 30,
  },

  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  checkbox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },

  strike: {
    textDecorationLine: "line-through",
    color: "#5c5c5c",
  },

  deleted: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    fontWeight: "500",
  },
});

export default styles;
