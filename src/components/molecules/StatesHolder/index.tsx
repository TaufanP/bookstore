import React from 'react';
import {View, ActivityIndicator, ViewProps} from 'react-native';
import colors from '../../../constants/colors';
import {Button, Phrase} from '../../atoms';
import styles from './styles';

interface EmptyViewProps extends ViewProps {
  buttonLabel?: string;
  description?: string;
  isLoading?: boolean;
  onPress?(): void;
}

export default function ({
  buttonLabel,
  description,
  isLoading,
  onPress,
  ...props
}: EmptyViewProps) {
  return (
    <View style={styles.container} {...props}>
      {!!isLoading && <ActivityIndicator color={colors.danger} size={56} />}
      <Phrase type="m" center>
        {description}
      </Phrase>
      {!isLoading && (
        <Button>
          <Phrase color={colors.white} type="baseBold" onPress={onPress}>
            {buttonLabel}
          </Phrase>
        </Button>
      )}
    </View>
  );
}
