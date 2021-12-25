import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import { GestureResponderEvent, StyleSheet, Text, View, Button } from 'react-native';
// import { TouchableHighlight } from 'react-native-gesture-handler';
import { Config } from '../consts';

type ZamziButtonProps = {
  onPress: () => void,
  title: string
}

const ZamziButton: React.FC<ZamziButtonProps> = ({ onPress, title = 'button title' }) => {

  return (
    <TouchableHighlight onPress={onPress} underlayColor={Config.TRANSPARENT}>
      <View style={styles.shadow}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: Config.DARK_ORANGE,
    // marginTop: 20,
    paddingBottom: 5,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'flex-start'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: Config.defaultFont,
    textShadowRadius: 2,
    textShadowColor: '#000',
    textShadowOffset: { height: 1, width: 0 }
  },
  button: {
    borderRadius: 4,
    paddingLeft: 15,
    paddingRight: 15,
    padding: 10,
    color: '#fff',
    shadowColor: Config.DARK_ORANGE,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: Config.ORANGE
  }
})

export default ZamziButton;
