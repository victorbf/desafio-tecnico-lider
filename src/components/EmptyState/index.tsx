import { Ghost } from 'phosphor-react';
import { EmptyStateContainer, EmptyStateIcon, EmptyStateText } from './style';

export type EmptyStateProps = {
  text: string;
};

const EmptyState = ({ text }: EmptyStateProps) => {
  return (
    <EmptyStateContainer>
      <EmptyStateIcon>
        <Ghost size={48} />
      </EmptyStateIcon>
      <EmptyStateText>{text}</EmptyStateText>
    </EmptyStateContainer>
  );
};

export default EmptyState;
