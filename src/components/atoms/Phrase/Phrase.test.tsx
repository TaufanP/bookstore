import {render, screen} from '@testing-library/react-native';
import Phrase from './';

describe('Phrase', () => {
  it("Given 'Hello World', should return 'Hello World'", () => {
    render(<Phrase>Hello World</Phrase>);
    expect(screen.getByText('Hello World')).toBeTruthy();
  });
});
