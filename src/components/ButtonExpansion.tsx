import { ButtonExpansionProps } from '../types/ButtonExpansionProps';
import { ArrowIcon } from './ArrowIcon';

export const ButtonExpansion = ({ isExpanded, onToggle }: ButtonExpansionProps ) => {
  return (
    <button
      className="button-expanded"
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
    >
      { isExpanded ? 'LESS' : 'MORE'}
      <span className="icon-wrapper">
        <ArrowIcon direction={isExpanded ? 'down' : 'up'} />
      </span>
    </button>
  )
}
