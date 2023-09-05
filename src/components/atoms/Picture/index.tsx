import React from 'react';
import {Image, ImageProps} from 'react-native';
import {ImagePlaceholder} from '../../../assets/images';
import testId from '../../../constants/testId';
import {DUMMY_IMAGE_LOCAL} from '../../../constants/components';

interface PictureProps extends Omit<ImageProps, 'source'> {
  uri?: string;
}

function Picture({uri = ImagePlaceholder, ...props}: PictureProps) {
  return (
    <Image
      testID={testId.PICTURE_ATOM}
      defaultSource={DUMMY_IMAGE_LOCAL}
      {...props}
      source={{uri}}
    />
  );
}

export default Picture;
