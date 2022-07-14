import { Component, HTMLAttributes, StyleHTMLAttributes } from 'react';

export type Range = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface FlexItemProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  gapTablet?: number;
  gapMobile?: number;
  col: Range;
  colTablet?: Range;
  colMobile?: Range;
  marginBottom?: number;
  stretch?: boolean;
  as?: string | Component;
  className?: string;
  style?: StyleHTMLAttributes<HTMLDivElement>;
}

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  gapTablet?: number;
  gapMobile?: number;
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  col: Range;
  colTablet?: Range;
  colMobile?: Range;
  className?: string;
  style?: StyleHTMLAttributes<HTMLDivElement>;
  as?: string | Component;
}
