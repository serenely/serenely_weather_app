import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native"

interface SunPositionListItemProps {
  time: string,
  title: string,
  emoji: string,
}

export const SunPositionListItem: React.FC<SunPositionListItemProps> = ({ time, emoji, title }) => (
  <View style={styles.timeList}>
    <Text style={styles.titleList}>{time} </Text>
    < Text style={styles.titleList}> {emoji} </Text>
    < Text style={styles.titleList}> {title} </Text>
  </View>
);

interface CitiesListItemProps {
  name: string,
  degree: string
}

export const CitiesListItem: React.FC<CitiesListItemProps> = ({ name, degree }) => (
  <View style={styles.currentCity} >
  <Link style={ styles.anotherCityBtn } href = {{ pathname: '/cities/[id]', params: { id: name } }}> { name } </Link>
    < View >
    <Text style={ styles.degree }>
      { degree }
      </Text>
      </View>
    </View>
  )

const styles = StyleSheet.create({
  timeList: {
    marginVertical: 10,
    paddingHorizontal: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleList: {
    color: 'white'
  },
  currentCity: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  anotherCityBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    margin: 10,
    padding: 10,
    fontWeight: 'bold',
  },
  degree: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 59,
    fontWeight: '100',
  },
})