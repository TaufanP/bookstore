import React from 'react';
import {View} from 'react-native';
import colors from '../../../constants/colors';
import {Button, Phrase} from '../../atoms';
import styles from './styles';

interface EmptyViewProps {
  buttonLabel?: string;
  description?: string;
  onPress?(): void;
}

export default function ({buttonLabel, description, onPress}: EmptyViewProps) {
  return (
    <View style={styles.container}>
      <Phrase type="m">{description}</Phrase>
      <Button>
        <Phrase color={colors.white} type="baseBold" onPress={onPress}>
          {buttonLabel}
        </Phrase>
      </Button>
    </View>
  );
}
