import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import styles from './styles';

interface ScreenProps {}

function Screen({children}: PropsWithChildren<ScreenProps>) {
  return <View style={styles.wrapper}>{children}</View>;
}

export default Screen;
