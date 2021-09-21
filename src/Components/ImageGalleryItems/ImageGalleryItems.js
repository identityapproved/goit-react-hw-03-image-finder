import { GalleryImage, ImageGalleryItem } from './ImageGalleryItems.styled';

export const ImageGalleryItems = ({ webFormatUrl, largeImageUrl, tags, onImageClick }) => {
  return (
    <ImageGalleryItem>
      <GalleryImage src={webFormatUrl} alt={tags} onClick={() => onImageClick(largeImageUrl)} />
    </ImageGalleryItem>
  );
};
