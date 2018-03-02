import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import StoreLocator from "../Components/StoreLocator";

class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StoreLocator/>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(MapScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
