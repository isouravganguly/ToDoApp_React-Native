import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 50,
    justifyContent: "space-around",
    backgroundColor: "#e8e6e1" ,
  },
  inputbox: {
    backgroundColor: "#fafafa",
    width: "70%",
    borderRadius: 10,
    height: 60,
    padding: 10,
    fontSize: 25,
  },

  addbutton: {
    backgroundColor: "#fafafa",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: 30,
    fontWeight: "500",
  },

  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default styles;
