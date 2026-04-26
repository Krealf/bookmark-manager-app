import React from 'react';
import { SvgProps } from '../types';

export const IconSearch = ({ size }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#051513"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="m17.5 17.5-3.625-3.625m1.958-4.708a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0"
      />
    </svg>
  );
};
