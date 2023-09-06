import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import colors from '../../../constants/colors';
import spacing from '../../../constants/spacing';
import {Book} from '../../../core/domain/models/book';
import {ListView, Phrase} from '../../atoms';
import {BookTile, EmptyView} from '../../molecules';
import styles from './styles';

interface BookTileRendererProps {
  data?: Book[];
}

export default function ({data}: BookTileRendererProps) {
  return (
    <>
      {!!data && data.length !== 0 ? (
        <ListView
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.container}
          estimatedItemSize={126}
          viewStyle={styles.listContainer}
        />
      ) : (
        <EmptyView buttonLabel="Add Book" description="Add your first book!" />
      )}
    </>
  );
}

function keyExtractor({id}: {id: string}) {
  return `${id}`;
}

function renderItem({item}: {item: Book}) {
  return <BookTile {...item} />;
}
