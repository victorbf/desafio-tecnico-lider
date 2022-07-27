import { ComponentPropsWithoutRef } from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { SearchInputContainer, SearchInputButton } from './style';

const SearchInput = ({ className, ...props }: ComponentPropsWithoutRef<'input'>) => {
  return (
    <SearchInputContainer className={className}>
      <input {...props} />
      <SearchInputButton>
        <MagnifyingGlass size={24} />
      </SearchInputButton>
    </SearchInputContainer>
  );
};

export default SearchInput;
