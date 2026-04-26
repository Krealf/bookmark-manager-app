import React from 'react';
import { SvgProps } from '../types';

export const IconMenuHamburger = ({ size, fill }: SvgProps) => {
  return (
    <svg width={size} height={size} fill={fill} viewBox="0 0 20 20">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M2.5 10h15m-15-5h15m-15 10h15"
      />
    </svg>
  );
};
