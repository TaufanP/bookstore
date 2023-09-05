import React from 'react';
import styles from './styles';
import {Book} from '../../../core/domain/models/book';
import {ListView} from '../../atoms';
import {BookTile} from '../../molecules';

interface BookTileRendererProps {
  data?: Book[];
}

export default function ({data}: BookTileRendererProps) {
  return (
    <ListView
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
      estimatedItemSize={126}
    />
  );
}

function keyExtractor({id}: {id: string}) {
  return `${id}`;
}

function renderItem({item}: {item: Book}) {
  return <BookTile {...item} />;
}
