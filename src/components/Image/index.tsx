import { ImageContainer, ImageOverlay, ImageTag } from './style';

export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <ImageContainer className={className}>
      <ImageTag src={src} alt={alt} />
      <ImageOverlay />
    </ImageContainer>
  );
};
export default Image;
