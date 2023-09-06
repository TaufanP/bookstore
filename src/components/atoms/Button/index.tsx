import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {}

export default function ({style, children, ...props}: ButtonProps) {
  return (
    <TouchableOpacity {...props} style={[styles.container, style]}>
      <>{children}</>
    </TouchableOpacity>
  );
}
