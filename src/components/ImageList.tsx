import { IconButton } from '@material-ui/core';
import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { useHomeStyles } from '../pages/Home/theme';

interface IImageListProps {
  images: string[];
  classes: ReturnType<typeof useHomeStyles>;
  removeImage?: (url: string) => void;
}

export const ImageList: React.FC<IImageListProps> = ({
  classes,
  images,
  removeImage,
}: IImageListProps) => {
  if (!images.length) {
    return null;
  }

  return (
    <div className={classes.imagesList}>
      {images.map((url) => (
        <div key={url} className={classes.imagesListItem}>
          {removeImage && (
            <IconButton
              className={classes.imagesListItemRemove}
              onClick={(): void => removeImage(url)}>
              <ClearIcon style={{ fontSize: 15 }} />
            </IconButton>
          )}
          <img key={url} src={url} />
        </div>
      ))}
    </div>
  );
};
