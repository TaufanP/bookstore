import React from 'react';
import {Book} from '../../../core/domain/models/book';
import {ListView} from '../../atoms';
import {BookTile, StatesHolder} from '../../molecules';
import styles from './styles';

interface BookTileRendererProps {
  data?: Book[];
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
}

export default function ({
  data,
  isLoading,
  isError,
  error,
}: BookTileRendererProps) {
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
        <StatesHolder
          isLoading={isLoading}
          buttonLabel={isError ? 'Try Again' : 'Add Book'}
          description={
            isError
              ? error
              : isLoading
              ? 'Getting our best collections...'
              : 'Add your first book!'
          }
        />
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
