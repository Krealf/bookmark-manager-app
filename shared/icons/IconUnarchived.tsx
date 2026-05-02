import React from 'react';
import { SvgProps } from '../types';

export const IconUnarchived = ({ size }: SvgProps) => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M1.667 8.333S3.337 6.057 4.695 4.7a7.5 7.5 0 1 1-1.902 7.385m-1.126-3.75v-5m0 5h5"
      />
    </svg>
  );
};
