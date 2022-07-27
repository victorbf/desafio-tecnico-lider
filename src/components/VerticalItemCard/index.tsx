import { HTMLAttributes, PropsWithChildren } from 'react';
import Image from '../Image';
import {
  VerticalItemCardContainer,
  VerticalItemCardContent,
  VerticalItemCardTitle,
  VerticalItemCardSubTitle,
} from './style';

export type VerticalItemCardProps = {
  imgUrl: string;
  name: string;
  quantity?: number;
  className?: string;
};

const VerticalItemCard = ({
  imgUrl,
  name,
  quantity,
  className,
  children,
  ...rest
}: PropsWithChildren<VerticalItemCardProps> & HTMLAttributes<HTMLDivElement>) => {
  return (
    <VerticalItemCardContainer className={className} {...rest}>
      <Image src={imgUrl} alt={name} />
      <VerticalItemCardContent>
        <VerticalItemCardTitle>{name}</VerticalItemCardTitle>
        {quantity && <VerticalItemCardSubTitle>Qnt: {quantity}</VerticalItemCardSubTitle>}
      </VerticalItemCardContent>
      {children}
    </VerticalItemCardContainer>
  );
};

export default VerticalItemCard;
