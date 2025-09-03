import type { SubCategory } from '../../types';
import { 
    HeartIcon,
    CakeIcon,
    FitnessIcon,
    SparklesIcon,
} from '../../components/icons';

const color1 = { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' };
const color2 = { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' };
const color3 = { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' };
const color4 = { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' };

export const healthWellbeingSubCategories: SubCategory[] = [
    {
        id: 'link-to-health',
        text: 'בריאות ואיכות חיים',
        icon: HeartIcon,
        colorClasses: color1,
        linkedCategoryId: 'cat-health-hidden',
        questions: [],
    },
    {
        id: 'link-to-food',
        text: 'אוכל ומתכונים',
        icon: CakeIcon,
        colorClasses: color2,
        linkedCategoryId: 'cat-food-hidden',
        questions: [],
    },
    {
        id: 'link-to-sports',
        text: 'ספורט וכושר גופני',
        icon: FitnessIcon,
        colorClasses: color3,
        linkedCategoryId: 'cat-sports-hidden',
        questions: [],
    },
    {
        id: 'link-to-mental-health',
        text: 'בריאות הנפש ומיינדפולנס',
        icon: SparklesIcon,
        colorClasses: color4,
        linkedCategoryId: 'cat-mental-health-hidden',
        questions: [],
    },
];
