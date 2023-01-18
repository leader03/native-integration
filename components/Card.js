import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({name}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height:50,
      backgroundColor:'gray',
      margin:10
    },
  });

export default Card