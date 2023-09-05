import {render, screen} from '@testing-library/react-native';
import ListView from './';
import {View} from 'react-native';
import Phrase from '../Phrase';

const data = [1, 2];

describe('ListView', () => {
  it('Given X items, render a list of X items', () => {
    render(
      <ListView
        data={data}
        renderItem={({item}) => (
          <View testID="view">
            <Phrase>{`${item}`}</Phrase>
          </View>
        )}
      />,
    );
    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.queryAllByTestId('view')).toHaveLength(data.length);
  });
});
