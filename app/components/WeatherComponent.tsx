import { Text, View, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchWeather } from "../redux/reducers/weatherSlice";


const SUN_POSITION_DATA = [
  { id: 1, time: '00:30', title: '25°', emoji: '☀️' },
  { id: 2, time: '03:30', title: '23°', emoji: '🌧️' },
  { id: 3, time: '06:30', title: '27°', emoji: '⛅' },
  { id: 4, time: '09:30', title: '30°', emoji: '🌩️' },
  { id: 5, time: '12:30', title: '31°', emoji: '🌧️' },
  { id: 6, time: '15:30', title: '33°', emoji: '☀️' },
  { id: 7, time: '18:30', title: '32°', emoji: '⛅' },
  { id: 8, time: '21:30', title: '29°', emoji: '❄️' },
]

const CITIES_DEGREE_DATA = [
  { id: 1, name: 'Varna', degree: '29°' },
  { id: 2, name: 'Bucharest', degree: '33°' },
  { id: 3, name: 'Sofia', degree: '31°' },
  { id: 4, name: 'Constanta', degree: '28°' },
]

const SunPositionListItem: React.FC<{ time: string, title: string, emoji: string }> = ({ time, title, emoji }) => (
  <View style={styles.timeList}>
    <Text style={styles.titleList}>{time}</Text>
    <Text style={styles.titleList}>{emoji}</Text>
    <Text style={styles.titleList}>{title}</Text>
  </View>
);






export default function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const weather = useSelector((state: RootState)=> state.weather)

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  const CitiesListItem: React.FC<{ name: string, degree: string }> = ({ name, degree }) => (
    <View style={styles.currentCity}>
      <Link style={styles.anotherCityBtn} href={{ pathname: '/cities/[id]', params: { id: name } }}> {name}</Link>
      <View>
        <Text style={styles.degree}>
          {degree}
        </Text>
      </View>
    </View>
  )

  return (
    <LinearGradient
      colors={['#a16bde', '#a0c4ff', '#f4b8ba']}
      start={{ x: 2, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Search the city...</Text>
      </View>
      <View style={styles.anotherCitiesContainer}>
      <Icon name="arrow-left" iconStyle={styles.arrows}  />  

        <FlatList
          data={weather.data.slice(1)}
          renderItem={({ item }) => <CitiesListItem name={item.cityName || 'uknown'} degree={item.cityTemperature?.toFixed(1) || 'N/A'} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      <Icon name="arrow-right" iconStyle={styles.arrows}  />  

        <View style={styles.arrows}>
        </View>
      </View>
      <View style={styles.mainContainer} >
        <Text style={styles.text}>
          {weather.data[0]?.cityName}
        </Text>
        <View>
          <Text style={styles.degree}>
            {weather.data[0]?.cityTemperature?.toFixed(1)}°
          </Text>
        </View>
        <View style={styles.sunPosition}>
          <View style={styles.sunRise}>
            <Text style={styles.sunRiseSetText}>
              Sunrise: 6:07
            </Text>
          </View>
          <View style={styles.sunSet}>
            <Text style={styles.sunRiseSetText}>
              Sunset: 20:07
            </Text>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          style={styles.sunPositionList}
          data={SUN_POSITION_DATA}
          renderItem={({ item }) => <SunPositionListItem time={item.time} title={item.title} emoji={item.emoji} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </LinearGradient >
  );
}


const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 0,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    opacity: 0.5,
  },
  searchText: {
    color: 'white',
  },
  container: {
    padding: 10,
    height: '110%'// needs to be changed later
  },
  anotherCitiesContainer: {
    marginTop: 10,
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
  arrows: {
    color: 'white',
    fontSize: 20,
    opacity: 0.7
  },
  arrowsText: {
    color: 'white'
  },
  mainContainer: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  degree: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 59,
    fontWeight: '100',
  },
  sunPosition: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  sunRise: {
    alignItems: 'flex-end',
    paddingRight: 30,
  },
  sunRiseSetText: {
    color: 'white',
    fontSize: 20,
  },
  sunSet: {
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
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
  sunPositionList: {
    height: 250
  }
})