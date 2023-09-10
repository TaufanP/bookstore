import React from 'react';
import {Book} from '../../../core/domain/models/book';
import {ListView} from '../../atoms';
import {ListViewProps} from '../../atoms/ListView';
import {BookTile, StatesHolder} from '../../molecules';
import styles from './styles';

interface BookTileRendererProps {
  data?: Book[];
  error?: string;
  isLoading?: boolean;
  isError?: boolean;
  pullRefresh: ListViewProps<any>['pullRefresh'];
}

export default function ({
  data,
  error,
  isLoading,
  isError,
  pullRefresh,
}: BookTileRendererProps) {
  const buttonLabel = isError ? 'Try Again' : 'Add Book';
  const description = isError
    ? error
    : isLoading
    ? 'Getting our best collections...'
    : 'Add your first book!';

  return (
    <>
      {!!data && data.length !== 0 ? (
        <ListView
          contentContainerStyle={styles.container}
          data={data}
          estimatedItemSize={126}
          keyExtractor={keyExtractor}
          pullRefresh={pullRefresh}
          renderItem={renderItem}
          viewStyle={styles.listContainer}
        />
      ) : (
        <StatesHolder
          isLoading={isLoading}
          buttonLabel={buttonLabel}
          description={description}
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
