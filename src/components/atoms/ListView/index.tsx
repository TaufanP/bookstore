import {FlashList, FlashListProps} from '@shopify/flash-list';
import React from 'react';

export interface ListViewProps<T> extends FlashListProps<T> {}

export default function <T>({...props}: ListViewProps<T>) {
  return (
    <FlashList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  );
}
