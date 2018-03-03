/* @flow */
import { Platform } from 'react-native'

export default class DeviceInfo {
  static isiOS (): boolean {
    return Platform.OS === 'ios'
  }

  static isAndroid (): boolean {
    return Platform.OS === 'android'
  }
}
