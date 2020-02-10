import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp'
const ResultsShowScreen = ({ navigation }) => {
  const [oneBusinessResult, setOneBusinessResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (businessId) => {
    let oneBusiness = await yelp.get(`/${businessId}`)
    setOneBusinessResult(oneBusiness.data)
  }
  //useEffect runs only one time when the page render first time
  useEffect(() => {
    getResult(id)

  }, [])

  if (!oneBusinessResult) {
    return null;
  }

  return (
    <View>
      <Text>{oneBusinessResult.name}</Text>
      <FlatList
        data={oneBusinessResult.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image style={styles.image} source={{ uri: item }} />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
});

export default ResultsShowScreen