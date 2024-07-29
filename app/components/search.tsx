import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";


export default function SearchEngine() {
  return(
    <View style={styles.home}>
    <Link style={styles.homeLink} href="/"> Home</Link>
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