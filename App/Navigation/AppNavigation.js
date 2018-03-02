import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import MapScreen from "../Containers/MapScreen";

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: MapScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
