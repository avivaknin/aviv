import type { SubCategory } from '../../types';
import { 
    PencilIcon, 
    BookOpenIcon, 
    MusicNoteIcon, 
    SparklesIcon,
    HeartIcon,
    BankIcon,
    ShoppingBagIcon,
    PlaneIcon,
} from '../../components/icons';

// Colors from the first 8 main categories in categoriesData.ts
const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };
const color5 = { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-700', hoverBorder: 'hover:border-green-500' };
const color6 = { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-700', hoverBorder: 'hover:border-yellow-500' };
const color7 = { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-700', hoverBorder: 'hover:border-purple-500' };
const color8 = { bg: 'bg-pink-100', border: 'border-pink-300', text: 'text-pink-500', hoverBorder: 'hover:border-pink-500' };

export const aiSubCategories: SubCategory[] = [
  {
    id: 'ai-health-main-link',
    text: 'בריאות ואיכות חיים',
    icon: HeartIcon,
    colorClasses: color1,
    questions: [],
    linkedCategoryId: 'hidden-ai-health'
  },
  {
    id: 'ai-finance-main-link',
    text: 'כספים וכלכלה',
    icon: BankIcon,
    colorClasses: color2,
    questions: [],
    linkedCategoryId: 'hidden-ai-finance'
  },
  {
    id: 'ai-content-main-link',
    text: 'יצירת תוכן',
    icon: PencilIcon,
    colorClasses: color3,
    questions: [],
    linkedCategoryId: 'hidden-ai-content'
  },
  {
    id: 'ai-leisure-main-link',
    text: 'בידור ופנאי',
    icon: SparklesIcon,
    colorClasses: color4,
    questions: [],
    linkedCategoryId: 'hidden-ai-leisure'
  },
  {
    id: 'ai-art-main-link',
    text: 'אומנות',
    icon: MusicNoteIcon,
    colorClasses: color5,
    questions: [],
    linkedCategoryId: 'hidden-ai-art'
  },
  {
    id: 'ai-learning-main-link',
    text: 'למידה והתפתחות',
    icon: BookOpenIcon,
    colorClasses: color6,
    questions: [],
    linkedCategoryId: 'hidden-ai-learning'
  },
  {
    id: 'ai-shopping-main-link',
    text: 'קניות וצרכנות',
    icon: ShoppingBagIcon,
    colorClasses: color7,
    questions: [],
    linkedCategoryId: 'hidden-ai-shopping'
  },
  {
    id: 'ai-travel-main-link',
    text: 'טיולים ונסיעות',
    icon: PlaneIcon,
    colorClasses: color8,
    questions: [],
    linkedCategoryId: 'hidden-ai-travel'
  },
];
