import React from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  fullText?: string;
  isStreaming?: boolean;
  sources?: { title: string; uri: string }[];
}

export interface ColorClasses {
  bg: string;
  border: string;
  text: string;
  hoverBorder: string;
}

export interface QuestionItem {
  id: string;
  text: string;
}

export interface SubCategory {
  id: string;
  text: string;
  questions: QuestionItem[];
  isHeading?: boolean;
  icon?: React.FC<{ className?: string }>;
  colorClasses?: ColorClasses;
  linkedCategoryId?: string;
}

export interface MainCategory {
  id: string;
  text: string;
  icon: React.FC<{ className?: string }>;
  subCategories: SubCategory[];
  colorClasses: ColorClasses;
  displayMode?: 'list' | 'grid';
  isHidden?: boolean;
  parentId?: string;
}