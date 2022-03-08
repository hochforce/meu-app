import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container:{
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image:{
    height: "10%"
  },
  content:{
    width: "100%",
    marginTop: 50,
    padding: 16
  },
  input:{
    width: "100%",
    height: 60,
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#bdbdbd",
    padding: 8,
    fontWeight: "bold",
    color: "#000"
  },
  textButton:{
    color: "#fff",
    fontWeight: "bold"
  },
  text:{
    color: "#bdbdbd",
    width: "100%",
    marginTop: 12,
    textAlign: "right"
  },
  button:{
    height: 50,
    marginTop: 40,
    backgroundColor: "#0277bd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  }
  
})