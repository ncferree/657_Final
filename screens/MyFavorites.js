import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Card } from 'react-native-paper';
import { EvilIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import axios from 'axios';

import Loading from '../components/Loading';
import {fetchMovies} from "../services/services";
import BackButton from '../components/BackButton';

const screen = Dimensions.get('screen');

const MyFavorites = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchNow, setSearchNow] = useState(false);

  //fetches movie and stores them in movies state

  useEffect(() => {
    setLoading(true);
    fetchMovies(searchTerm, movies).then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, [searchNow]);

  return loading ? (
    <Loading />
  ) : (
    <ScrollView>
      <BackButton navigation={navigation} />  
      <View style={styles.container}>
        <View>
          <Text style={styles.bannerTitle}>
              My Favorite Movies
          </Text>  
          <View style={styles.inputCard}>
            <TextInput
              style={styles.input}
              placeholder={'search for more movies'}
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            />
            <TouchableOpacity
              onPress={() => {
                console.log('pressed');
                setSearchNow(!searchNow);
              }}>
              <EvilIcons
                name={searchTerm ? 'search' : 'refresh'}
                size={20}
                color="black"
                style={{ alignSelf: 'center', marginHorizontal: 20 }}
              />
            </TouchableOpacity>
            
          </View>

          <View style={styles.movieListCard}>
            <FlatList
              data={movies}
              numColumns={2}
              renderItem={({ item, index }) => {
                return (
                  <Card style={styles.movieCard}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Movie', { movie: item })
                      }>
                      <Image
                        source={{
                          uri: `http://image.tmdb.org/t/p/w780${item.poster_path}`,
                        }}
                        style={{ width: Constants.width, height: 200 }}
                      />
                    </TouchableOpacity>
                  </Card>
                );
              }}
            />
          </View>
        </View>
      </View>
      </ScrollView>
  );
};

export default MyFavorites;

const styles = StyleSheet.create({
  banner: { width: Constants.width, height: 200 },
  bannerInfoCard: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 50,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(21,21,21,0.5)',
  },
  bannerTitle: {
    color: 'white',
    fontSize: 24,
    letterSpacing: 1.2,
    textAlign: 'center',
  },
  bannerOverview: {
    color: 'grey',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#212121',
  },
  heading: {
    color: 'black',

  },
  inputCard: {
    position: 'absolute',
    top: 20,
    margin: 40,
    left: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 100,
  },
  input: {
    padding: 10,
    flex: 1,
  },
  movieCard: {
    flex: 1,
    height: 200,
    margin: 5,
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: 'white',
  },
  movieListCard: {
    top: screen.height * 0.05,
  },

});
