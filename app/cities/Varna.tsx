import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";


export default function Varna() {
  return(
    <View style={styles.home}>
    <Link style={styles.homeLink} href="/"> Varna</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  home:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'pink'
  },
  homeLink:{
    color: 'white',
    fontSize: 30,
  }
})