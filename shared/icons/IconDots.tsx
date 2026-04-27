import React from 'react';
import { SvgProps } from '../types';

export const IconDots = ({ size }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        stroke="#051513"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M10 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666M10 5a.833.833 0 1 0 0-1.667A.833.833 0 0 0 10 5M10 16.667A.833.833 0 1 0 10 15a.833.833 0 0 0 0 1.667"
      />
    </svg>
  );
};
