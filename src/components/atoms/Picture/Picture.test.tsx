import {render, screen} from '@testing-library/react-native';
import {ImagePlaceholder} from '../../../assets/images';
import {DUMMY_IMAGE_URL} from '../../../constants/components';
import testId from '../../../constants/testId';
import Picture from './';

describe('Picture', () => {
  it("Render image from 'uri' prop", () => {
    render(<Picture uri={DUMMY_IMAGE_URL} />);
    const picture = screen.getByTestId(testId.PICTURE_ATOM);
    expect(picture.props.source.uri).toEqual(DUMMY_IMAGE_URL);
  });

  it("'uri' is undefined, render default image placholder", () => {
    render(<Picture />);
    const picture = screen.getByTestId(testId.PICTURE_ATOM);
    expect(picture.props.source.uri).toEqual(ImagePlaceholder);
  });
});
