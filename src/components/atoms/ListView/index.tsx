import {FlashList, FlashListProps} from '@shopify/flash-list';
import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

export interface ListViewProps<T> extends FlashListProps<T> {
  viewStyle?: StyleProp<ViewStyle>;
}

export default function <T>({viewStyle, ...props}: ListViewProps<T>) {
  return (
    <View style={viewStyle}>
      <FlashList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...props}
      />
    </View>
  );
}
