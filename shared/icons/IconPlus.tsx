import React from 'react';
import { SvgProps } from '../types';

export const IconPlus = ({ size }: SvgProps) => {
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
        d="M10 4.167v11.666M4.167 10h11.667"
      />
    </svg>
  );
};
