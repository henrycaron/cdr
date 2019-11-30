
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    autocompletesContainer: {
      paddingTop: 0,
      zIndex: 1,
      width: "100%",
      paddingHorizontal: 8,
    },
    input: {maxHeight: 40},
    inputContainer: {
      display: "flex",
      flexShrink: 0,
      flexGrow: 0,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: "#c7c6c1",
      paddingVertical: 13,
      paddingLeft: 12,
      paddingRight: "5%",
      width: "100%",
      justifyContent: "flex-start",
    },
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
    },
    plus: {
      position: "absolute",
      left: 15,
      top: 10,
    },
  });
  
  export default styles;