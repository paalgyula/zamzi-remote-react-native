import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Config } from '../../consts';
import ZamziButton from '../ZamziButton';
import baseStyle from '../../baseStyle';
import ZamziCounter from '../ZamziCounter';
import FullView from '../FullView';

type WaiterProps = {
  message?: string
}

const Waiter: React.FC<WaiterProps> = ({ message }) => {
  return (
    <FullView color={Config.GREEN}>
      <Text style={styles.waitMessage}>
        {message || "Waiting for another players to answer..."}
      </Text>

      <ZamziCounter number={120} started/>
    </FullView>
  )
}

const styles = StyleSheet.create({
  waitMessage: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    textShadowColor: '#000',
    fontFamily: Config.defaultFont,
  },
  marginTop: {
    marginTop: 15
  }
})

export default Waiter
