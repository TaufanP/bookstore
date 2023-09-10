import React from 'react';
import {Text, TextProps} from 'react-native';
import colors from '../../../constants/colors';
import styles from './styles';

const PhraseType = {
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  baseBold: 'baseBold',
  m: 'm',
  mBold: 'mBold',
  l: 'l',
  xl: 'xl',
  xxl: 'xxl',
};

interface PhraseProps extends TextProps {
  type?: keyof typeof PhraseType;
  color?: string;
  center?: boolean;
}

function Phrase({
  children,
  type = 'base',
  style,
  color = colors.text100,
  center,
  ...props
}: PhraseProps) {
  return (
    <Text
      style={[
        styles[type],
        style,
        {color, ...(center && {textAlign: 'center'})},
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

export default Phrase;
