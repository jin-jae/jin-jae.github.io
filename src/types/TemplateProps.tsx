import { ReactNode } from 'react';

export interface TemplateProps {
  title: string;
  url?: string;
  from?: string;
  period?: string;
  role?: string;
  description?: ReactNode[];
  results?: string[];
}