import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import ProgressBar from './ProgressBar';
import AddButton from './AddButton'

const screen = Dimensions.get('window');
const InfoCard = ({ movie, director }) => {
  return (
    <View style={styles.infoCard}>
      <Image
        source={{
          uri: `http://image.tmdb.org/t/p/w780${movie?.poster_path}`,
        }}
        style={styles.poster}
      />
      <View style={styles.textInfo}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Genre: {movie.genre } </Text>
        <Text style={{ color: 'white', fontSize: 10 }}>
          {movie.overview.length < 160
            ? movie.overview
            : movie.overview.substr(0, 160) + '...'}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ProgressBar vote_average={movie.vote_average} />
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            {movie.vote_average}
          </Text>
        </View>
        <View>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>DIRECTOR</Text>
          <Text style={{ color: 'white', fontSize: 10 }}>{director?.name}</Text>
          <Text style={{ color: 'white', fontSize: 10 }}>Released: {movie.release_date}</Text>
         <AddButton  title="Add to My Favorites" 
          onPress={() =>
           navFavorites.navigate('Favorites')}/>
         
       
        </View>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  infoCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(21,21,21,0.5)',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  poster: {
    width: screen.width * 0.3,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInfo: {
    left: 10,
    right: 10,
    flex: 1,
    justifyContent: 'space-evenly',
  },
});