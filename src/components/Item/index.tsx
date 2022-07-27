import { DotsThreeVertical } from 'phosphor-react';
import { ItemContainer, ItemContent, ItemTitle, ItemDescription, ItemText } from './style';
import Image from '../Image';
import { HTMLAttributes } from 'react';

export type Item = HTMLAttributes<HTMLDivElement> & {
  name: string;
  description: string;
  imgUrl: string;
  quantity: number;
  isOnCart?: boolean;
};

const Item = ({ name, description, imgUrl, quantity, isOnCart, ...rest }: Item) => {
  return (
    <ItemContainer {...rest}>
      <Image src={imgUrl} alt={name} />
      <ItemContent>
        <ItemTitle>
          {name}
          {isOnCart ? (
            <ItemText>
              ({quantity})
              <DotsThreeVertical size={20} />
            </ItemText>
          ) : (
            <DotsThreeVertical size={20} />
          )}
        </ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
    </ItemContainer>
  );
};

export default Item;
