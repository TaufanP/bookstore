import {FlashList, FlashListProps} from '@shopify/flash-list';
import React from 'react';
import {RefreshControl, StyleProp, View, ViewStyle} from 'react-native';

export interface ListViewProps<T> extends FlashListProps<T> {
  pullRefresh?: {
    isRefreshing: boolean;
    onRefresh?(): void;
  };
  viewStyle?: StyleProp<ViewStyle>;
}

export default function <T>({
  viewStyle,
  pullRefresh,
  ...props
}: ListViewProps<T>) {
  return (
    <View style={viewStyle}>
      <FlashList
        {...(!!pullRefresh && {
          refreshControl: (
            <RefreshControl
              refreshing={pullRefresh.isRefreshing}
              onRefresh={pullRefresh.onRefresh}
            />
          ),
        })}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...props}
      />
    </View>
  );
}
