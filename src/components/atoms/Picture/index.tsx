import React from 'react';
import {Image, ImageProps} from 'react-native';
import {ImagePlaceholder} from '../../../assets/images';
import testId from '../../../constants/testId';

interface PictureProps extends Omit<ImageProps, 'source'> {
  uri?: string;
}

function Picture({uri = ImagePlaceholder, ...props}: PictureProps) {
  return (
    <Image
      testID={testId.PICTURE_ATOM}
      defaultSource={require(ImagePlaceholder)}
      {...props}
      source={{uri}}
    />
  );
}

export default Picture;
