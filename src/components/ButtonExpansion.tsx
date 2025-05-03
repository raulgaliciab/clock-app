import { ButtonExpansionProps } from "../types/ButtonExpansionProps"

export const ButtonExpansion = ({ isExpanded, onToggle }: ButtonExpansionProps ) => {
  return (
    <button onClick={onToggle}>
      { isExpanded ? 'LESS' : 'MORE'}
      <img src="/assets/desktop/icon-arrow-down.svg" alt="Expand button" />
    </button>
  )
}
