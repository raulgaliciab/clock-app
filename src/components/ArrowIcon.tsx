type ArrowIconProps = {
  direction: 'up' | 'down';
};

export const ArrowIcon = ({ direction }: ArrowIconProps) => {
  const rotation = direction === 'up' ? 'rotate(0)' : 'rotate(180deg)';

  return (
    <svg
      style={{ transform: rotation }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
