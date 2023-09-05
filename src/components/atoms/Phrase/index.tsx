import React from 'react';
import {Text, TextProps} from 'react-native';
import styles from './styles';

const PhraseType = {
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  m: 'm',
  mBold: 'mBold',
  l: 'l',
  xl: 'xl',
  xxl: 'xxl',
};

interface PhraseProps extends TextProps {
  type?: keyof typeof PhraseType;
}

function Phrase({children, type = 'base', style, ...props}: PhraseProps) {
  return (
    <Text style={[styles[type], style]} {...props}>
      {children}
    </Text>
  );
}

export default Phrase;
