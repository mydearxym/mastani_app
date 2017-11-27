import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mastani App !!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#092B36',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'wheat',
    fontWeight: 'bold',
  },
})
