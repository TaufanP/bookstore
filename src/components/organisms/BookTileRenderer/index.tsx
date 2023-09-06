import React from 'react';
import {Button, TouchableOpacity, View} from 'react-native';
import {Book} from '../../../core/domain/models/book';
import {ListView, Phrase} from '../../atoms';
import {BookTile} from '../../molecules';
import styles from './styles';
import spacing from '../../../constants/spacing';
import colors from '../../../constants/colors';

interface BookTileRendererProps {
  data?: Book[];
}

export default function ({data}: BookTileRendererProps) {
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
      }}
    >
      {!!data && data.length !== 0 ? (
        <ListView
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.container}
          estimatedItemSize={126}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: spacing.sp16,
            height: '100%',
          }}
        >
          <Phrase type="m">Add your first book!</Phrase>
          <TouchableOpacity
            style={{
              paddingHorizontal: spacing.sp16,
              paddingVertical: spacing.sp8,
              borderRadius: 4,
              backgroundColor: 'red',
            }}
          >
            <Phrase color={colors.white} type="baseBold">
              Add Book
            </Phrase>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

function keyExtractor({id}: {id: string}) {
  return `${id}`;
}

function renderItem({item}: {item: Book}) {
  return <BookTile {...item} />;
}
