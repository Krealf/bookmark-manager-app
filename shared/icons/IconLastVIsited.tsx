import React from 'react';
import { SvgProps } from '../types';

export const IconLastVisited = ({ size }: SvgProps) => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
          d="M10 5v5l3.334 1.667m5-1.667a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
